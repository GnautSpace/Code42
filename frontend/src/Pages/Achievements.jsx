import { CertificatesData } from './certification-data/CertificatesData'

//import ufoCert from "../assets/asteroid.png";
import '../style/Achievements.css'
function Achievements() {
    return (
        <section className="cert-container">
            <h2>The certified Hitchhiker&apos;s Arsenal</h2>
            <p>Verified tools for surviving the absurdities of the universe</p>

            <div className="ufo-container"
                >

                
                <div
                    
                    className="cert-grid"
                >
                    {CertificatesData.map((cert, idx) => (
                        <div 
                        key={idx} className="cert-card">
                            
                            <img src={cert.uiImage} className="cert-ufo-img"/>
                            
                            
                            <div className="cert-details">
                                <h4>{cert.title}</h4>
                                {cert.link?(
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
                                ):(cert.pdf?
                                    (<a href={cert.pdf} download>Download Certificate</a>):<p></p>
                                )}
                                <p>{cert.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Achievements;