import React from "react";

interface BreadCrumbProps {
    url: string,
    page: string,
    urlname: string
}
function BreadCrumb({ url, page, urlname }: BreadCrumbProps) {
    return (<nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href={url}>{urlname}</a></li>
            <li className="breadcrumb-item active" aria-current="page">{page}</li>
        </ol>
    </nav>)
}


export default BreadCrumb;