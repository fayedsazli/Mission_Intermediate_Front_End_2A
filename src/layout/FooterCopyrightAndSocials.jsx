import Socials from "../common/Socials";

const FooterCopyrightAndSocials = () => {
    return(
        <div className="d-flex w-100 justify-content-between flex-column-reverse">
            <p className="text-secondary fw-semibold" >@2023 Gerobak Sayur All Rights Reserved.</p>
            <Socials />
        </div>
    );
};

export default FooterCopyrightAndSocials;