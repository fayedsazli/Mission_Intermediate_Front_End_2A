import FooterContent from "./FooterContent";
import FooterCopyrightAndSocials from "./FooterCopyrightAndSocials";

const Footer = () => {
    return(
        <div className="container-fluid bg-white p-5 rounded">
            <FooterContent />
            <hr className="border border-secondary" />
            <FooterCopyrightAndSocials />
        </div>
    );
};

export default  Footer;