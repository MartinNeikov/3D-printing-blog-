import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/useAuth.js";

import {
  deleteAvatar,
  getProfile,
  updateProfile,
  uploadAvatar,
} from "../../services/profileService.js";

const MAX_AVATAR_SIZE = 5 * 1024 * 1024;

const ALLOWED_AVATAR_TYPES = ["image/jpeg", "image/png", "image/webp"];

function Profile() {
  const { user } = useAuth();

  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadProfile() {
      try {
        setIsLoading(true);
        setError("");

        const data = await getProfile(user.id);

        if (ignore) {
          return;
        }

        if (!data) {
          setError("Profile could not be found.");
          return;
        }

        setProfile(data);
        setName(data.name);
      } catch (error) {
        if (ignore) {
          return;
        }

        console.error("Failed to load profile:", error);

        setError("Unable to load your profile. Please try again later.");
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    loadProfile();

    return () => {
      ignore = true;
    };
  }, [user.id]);

  function avatarChangeHandler(e) {
    const file = e.target.files[0];

    setError("");
    setSuccessMessage("");

    if (!file) {
      setAvatarFile(null);
      return;
    }

    if (!ALLOWED_AVATAR_TYPES.includes(file.type)) {
      setError("Avatar must be a JPEG, PNG or WebP image.");

      e.target.value = "";
      return;
    }

    if (file.size > MAX_AVATAR_SIZE) {
      setError("Avatar must be smaller than 5 MB.");

      e.target.value = "";
      return;
    }

    setAvatarFile(file);
  }

  async function submitHandler(e) {
    e.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      setError("Name is required.");
      return;
    }

    try {
      setIsSaving(true);
      setError("");
      setSuccessMessage("");

      let newAvatar = null;

      if (avatarFile) {
        newAvatar = await uploadAvatar(user.id, avatarFile);
      }

      const profileData = {
        name: trimmedName,
      };

      if (newAvatar) {
        profileData.avatar_url = newAvatar.avatarUrl;
        profileData.avatar_path = newAvatar.avatarPath;
      }

      let updatedProfile;

      try {
        updatedProfile = await updateProfile(user.id, profileData);
      } catch (error) {
        if (newAvatar?.avatarPath) {
          await deleteAvatar(newAvatar.avatarPath);
        }

        throw error;
      }

      if (
        newAvatar &&
        profile?.avatar_path &&
        profile.avatar_path !== newAvatar.avatarPath
      ) {
        await deleteAvatar(profile.avatar_path);
      }

      setProfile(updatedProfile);
      setName(updatedProfile.name);
      setAvatarFile(null);

      setSuccessMessage("Profile updated successfully.");
    } catch (error) {
      console.error("Failed to update profile:", error);

      setError(
        error.message || "Unable to update your profile. Please try again.",
      );
    } finally {
      setIsSaving(false);
    }
  }

  if (isLoading) {
    return (
      <section className="form-page">
        <div className="form-container-small">
          <p>Loading profile...</p>
        </div>
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="form-page">
        <div className="form-container-small">
          <h1>Unable to load profile</h1>

          {error && <p className="form-error">{error}</p>}
        </div>
      </section>
    );
  }

  const profileInitial = profile.name?.trim().charAt(0).toUpperCase() || "U";

  return (
    <section className="form-page">
      <div className="form-container-small">
        <div className="form-card">
          <h1 className="form-title">My Profile</h1>

          <div className="profile-avatar-wrapper">
            {profile.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt={`${profile.name} avatar`}
                className="profile-avatar"
              />
            ) : (
              <div
                className="profile-avatar profile-avatar-fallback"
                aria-label="Default avatar"
              >
                {profileInitial}
              </div>
            )}
          </div>

          <form onSubmit={submitHandler} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>

              <input
                type="text"
                id="name"
                className="form-input"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                  setSuccessMessage("");
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>

              <input
                type="email"
                id="email"
                value={user.email || ""}
                disabled
                className="form-input profile-input-disabled"
              />

              <small className="profile-field-hint">
                Email cannot be changed.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="avatar" className="form-label">
                Change Avatar
              </label>

              <input
                type="file"
                id="avatar"
                className="form-input"
                accept="image/jpeg,image/png,image/webp"
                onChange={avatarChangeHandler}
              />

              {avatarFile && <p>Selected: {avatarFile.name}</p>}
            </div>

            {error && <p className="form-error">{error}</p>}

            {successMessage && <p className="form-success">{successMessage}</p>}

            <button type="submit" className="form-submit" disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Profile"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;
