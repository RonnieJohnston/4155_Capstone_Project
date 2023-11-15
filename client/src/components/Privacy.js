import React from 'react';
import '../assets/css/Privacy.css';

const PrivacyPage = () => {

    return (
        <div className='privacy-page'>
            <h2>Declassified Privacy Policy</h2>
            <h6 className='text-css'>Last Updated: Wednesday, November 15, 2023</h6>

            <h6 className='text-css'>
                <i>
                At Declassified, we are committed to protecting your privacy and ensuring
                the security of your personal information. This Privacy Policy outlines
                how we collect, use, and safeguard your data when you use our website
                and services. By accessing or using Declassified, you agree to the terms
                outlined in this policy.
                </i>
            </h6>
            <br/>

            <h5 className='priacy-page-title'>1. Information We Collect:</h5>
            <h6 className='privacy-page-text'>
                When you create an account or submit a review on Declassified, we may collect personal
                information such as your account username as well as the academic information
                you provided when creating your account. This information may be displayed under the review
                information if you choose to post a review on Declassified.
            </h6>

            <h5 className='priacy-page-title'>2. How We Use Your Information:</h5>
            <h6 className='privacy-page-text'>
                Personalization: Your information helps us personalize your experience on Declassified,
                providing relevant content and recommendations.
                <br/><br/>
                Communication: We may use your email address to send you important updates, newsletters,
                or respond to inquiries in which you may opt out at any time.
                <br/><br/>
                Platform Improvement: Data collected helps us analyze user behavior, allowing us to enhance
                and optimize Declassified for all users. This information will not be shared with any one
                else outside of the Declassified platform.
            </h6>

            <h5 className='priacy-page-title'>3. Sharing Your Information:</h5>
            <h6 className='privacy-page-text'>
                Anonymity: Reviews submitted to Declassified are generally posted anonymously although you can
                choose to share your account username on your posted review. Your username, but not your
                personal information such as your name and email, may be visible to other users.
                <br/><br/>
                Third-Party Services: We may use third-party services for analytics and communication. These
                providers have their own privacy policies, and we encourage you to review them.
                <br/><br/>
                Legal Compliance: We may disclose your information if required by law or to protect the rights, ]
                property, or safety of Declassified, its users, or others.
            </h6>

            <h5 className='priacy-page-title'>4. Security:</h5>
            <h6 className='privacy-page-text'>
                We implement industry-standard security measures to protect your information from unauthorized access,
                disclosure, alteration, and destruction. However, no method of transmission over the internet or
                electronic storage is entirely secure, and we cannot guarantee absolute security.
            </h6>

            <h5 className='priacy-page-title'>5. Cookies:</h5>
            <h6 className='privacy-page-text'>
                Declassified uses cookies to enhance user experience. You can control cookies through your browser
                settings, but disabling them may limit certain features of the site.
            </h6>

            <h5 className='priacy-page-title'>6. Your Choices:</h5>
            <h6 className='privacy-page-text'>
                You have the right to update, correct, or delete your personal information. You can also opt-out
                of promotional communications.
            </h6>

            <h5 className='priacy-page-title'>7. Changes to Privacy Policy:</h5>
            <h6 className='privacy-page-text'>
                Declassified may update this Privacy Policy periodically. We will notify users of any material
                changes by updating the "Last Updated" date.
            </h6>

            <h5 className='priacy-page-title'>8. Contact Us:</h5>
            <h6 className='privacy-page-text'>
                If you have questions, concerns, or requests regarding your privacy on Declassified, please contact
                us via the contact us page and leave us with a valid email address so we may contact you in regards
                to your query.
            </h6>

            <br/>
            <h6 className='privacy-page-text'>
                <i>By using Declassified, you acknowledge that you have read and understood this Privacy Policy.</i>
            </h6>
        </div>
    );
};

export default PrivacyPage;