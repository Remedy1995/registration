
interface PillsProps {
    showPillsClientActive: boolean,
    showPillsPhoneActive: boolean,
    showPillsAccountActive: boolean,
    showPillsTrusteeActive: boolean,
    showPillsBeneficiaryActive: boolean,
    showPillsSummaryActive: boolean,
    showValidationAndSubmissionActive : boolean,
    showDueDilligenceActive :boolean

}

function Pills({ showPillsClientActive, showPillsPhoneActive,showPillsAccountActive,showPillsTrusteeActive,showPillsBeneficiaryActive,showPillsSummaryActive ,  showValidationAndSubmissionActive,showDueDilligenceActive}: PillsProps) {
    return (
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className={showPillsPhoneActive ? "nav-link active" : "nav-link"} id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Phone Verification</button>

            </li>
            <li className="nav-item" role="presentation">
                <button className={showPillsClientActive ? "nav-link active" : "nav-link disabled"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-Client" type="button" role="tab" aria-controls="pills-home" aria-selected="true"

                >Client</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className={showPillsAccountActive ? "nav-link active" : "nav-link disabled"} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-account" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Account</button>
            </li>
            <li className="nav-item" role="presentation">
                <button  className={showPillsTrusteeActive ? "nav-link active" : "nav-link disabled"} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-trustee" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Trustee</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className={showPillsBeneficiaryActive ? "nav-link active" : "nav-link disabled"} id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-beneficiary" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Beneficiary</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className={showPillsSummaryActive ? "nav-link active" : "nav-link disabled"} id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-Summary" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Summary</button>

            </li>
            <li className="nav-item" role="presentation">
                <button className={showValidationAndSubmissionActive ? "nav-link active" : "nav-link disabled"} id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-Summary" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Validation & Submission</button>

            </li>
            <li className="nav-item" role="presentation">
                <button className={showDueDilligenceActive ? "nav-link active" : "nav-link disabled"} id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-Summary" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Due Dilligence</button>

            </li>
        </ul>
    )
}

export default Pills;