function SectionHeader({title}) {
    return (
        <div className="row mb-4">
            <div className="col-sm-6">
                <h2 className="posts-entry-title">{title}</h2>
            </div>

            <div className="col-sm-6 text-sm-end">
                <a href="#" className="read-more">
                    View All
                </a>
            </div>
        </div>
    );
}

export default SectionHeader;