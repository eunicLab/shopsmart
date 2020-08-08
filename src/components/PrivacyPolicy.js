import React from 'react';
import '../App.css';
import LoginPage from './LoginPage';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

let PrivacyPolciy = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/Login' exact component={LoginPage} />
        <div className='fullbackground'>
          <div className='unscrollable'>
            <div className='NavigationBar'>
              {/*<Link exact to='/Login' className='whiteIcon'>
                <IoMdArrowRoundBack className='backIcon' />
  </Link>*/}
              <span className='navTitle2'> Privacy Policy</span>
            </div>
          </div>
          <div className='allTitles'>
            <p className='firstParagraph'>
              Thank you for choosing to be part of our community at eunicLab
              (“company”, “we”, “us”, or “our”). We are committed to protecting
              your personal information and your right to privacy. If you have
              any questions or concerns about our policy, or our practices with
              regards to your personal information, please contact us at
              eunicLab.co@gmail.com.
            </p>
            <p className='paragraph'>
              When you visit our mobile application, and use our services, you
              trust us with your personal information. We take your privacy very
              seriously. In this privacy notice, we describe our privacy policy.
              We seek to explain to you in the clearest way possible what
              information we collect, how we use it and what rights you have in
              relation to it. We hope you take some time to read through it
              carefully, as it is important. If there are any terms in this
              privacy policy that you do not agree with, please discontinue use
              of our Apps and our services.
            </p>
            <p className='paragraph'>
              This privacy policy applies to all information collected through
              our mobile application, ("Apps"), and/or any related services,
              sales, marketing or events (we refer to them collectively in this
              privacy policy as the "Sites"). Please read this privacy policy
            </p>
            <p className='paragraph'>
              Please read this privacy policy carefully as it will help you make
              informed decisions about sharing your personal information with
              us.
            </p>
            <p className='mainHeading'>1. WHAT INFORMATION DO WE COLLECT?</p>
            <p className='miniHeading'>
              Personal information you disclose to us
            </p>
            <p className='paragraph'>
              We collect personal information that you voluntarily provide to us
              when registering at the Apps, expressing an interest in obtaining
              information about us or our products and services, when
              participating in activities on the Apps or otherwise contacting
              us.
            </p>
            <p className='paragraph'>
              The personal information that we collect depends on the context of
              your interactions with us and the Apps, the choices you make and
              the products and features you use. The personal information we
              collect can include the following:
            </p>
            <p className='paragraph'>
              <span className='subHeading'>Name and Contact Data. </span>
              <span>
                We collect your first and last name, email address, postal
                address, phone number, and other similar contact data.
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>Credentials. </span>
              <span>
                We collect passwords, password hints, and similar security
                information used for authentication and account access.
              </span>
            </p>
            <span className='miniHeading'>
              Information automatically collected
            </span>
            <p className='paragraph'>
              We automatically collect certain information when you visit, use
              or navigate the Apps. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Apps and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Apps, and for our
              internal analytics and reporting purposes.
            </p>
            <span className='miniHeading'>
              Information collected through our Apps
            </span>
            <p className='paragraph'>
              If you use our Apps, we may also collect the following
              information:
            </p>
            <p className='paragraph'>
              <span className='subHeading'>Mobile Device Access. </span>
              <span>
                We may request access or permission to certain features from
                your mobile device, including your mobile device’s storage, and
                other features. If you wish to change our access or permissions,
                you may do so in your device’s settings.
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'> Mobile Device Data. </span>
              <span>
                We may automatically collect device information (such as your
                mobile device ID, model and manufacturer), operating system,
                version information and IP address.
              </span>
            </p>
            <span className='miniHeading'>
              Information collected from other sources
            </span>
            <p className='paragraph'>
              We may obtain information about you from other sources, such as
              public databases, joint marketing partners, as well as from other
              third parties. Examples of the information we receive from other
              sources include: social media profile information; marketing leads
              and search results and links, including paid listings (such as
              sponsored links).
            </p>
            <p className='mainHeading'>2. HOW DO WE USE YOUR INFORMATION?</p>
            <p className='paragraph'>
              We use personal information collected via our Apps for a variety
              of business purposes described below. We process your personal
              information for these purposes in reliance on our legitimate
              business interests ("Business Purposes"), in order to enter into
              or perform a contract with you ("Contractual"), with your consent
              ("Consent"), and/or for compliance with our legal obligations
              ("Legal Reasons"). We indicate the specific processing grounds we
              rely on next to each purpose listed below.
            </p>
            <p className='paragraph'>
              We use the information we collect or receive:
            </p>
            <p className='paragraph'>
              <span className='subHeading'>
                To facilitate account creation and logon process.{' '}
              </span>

              <span>
                If you choose to link your account with us to a third party
                account *(such as your Google or Facebook account), we use the
                information you allowed us to collect from those third parties
                to facilitate account creation and logon process.
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>
                To send you marketing and promotional communications.{' '}
              </span>
              <span>
                We and/or our third party marketing partners may use the
                personal information you send to us for our marketing purposes,
                if this is in accordance with your marketing preferences. You
                can opt-out of our marketing emails at any time (see the "WHAT
                ARE YOUR PRIVACY RIGHTS" below).{' '}
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>
                To send administrative information to you.{' '}
              </span>
              <span>
                We may use your personal information to send you product,
                service and new feature information and/or information about
                changes to our terms, conditions, and policies.
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>
                Fulfill and manage your orders.{' '}
              </span>{' '}
              <span>
                We may use your information to fulfill and manage your orders,
                payments, returns, and exchanges made through the Apps.{' '}
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>
                Deliver targeted advertising to you.{' '}
              </span>{' '}
              <span>
                We may use your information to develop and display content and
                advertising (and work with third parties who do so) tailored to
                your interests and/or location and to measure its effectiveness.
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>Request Feedback.</span>
              <span>
                We may use your information to request feedback and to contact
                you about your use of our Apps.
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>To protect our Sites. </span>
              <span>
                We may use your information as part of our efforts to keep our
                Apps safe and secure (for example, for fraud monitoring and
                prevention).
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>
                To enable user-to-user communications.{' '}
              </span>
              <span>
                We may use your information in order to enable user-to-user
                communications with each user's consent. To enforce our terms,
                conditions and policies.
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>
                To respond to legal requests and prevent harm.{' '}
              </span>
              <span>
                If we receive a subpoena or other legal request, we may need to
                inspect the data we hold to determine how to respond.
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>For other Business Purposes. </span>
              <span>
                We may use your information for other Business Purposes, such as
                data analysis, identifying usage trends, determining the
                effectiveness of our promotional campaigns and to evaluate and
                improve our Apps, products, services, marketing and your
                experience.
              </span>
            </p>
            <p className='mainHeading'>
              3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            </p>
            <p className='paragraph'>
              We may process or share data based on the following legal basis:
            </p>
            <p className='paragraph'>
              <span className='subHeading'>Consent: </span>
              <span>
                We may process your data if you have given us specific consent
                to use your personal information in a specific purpose.
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>Legitimate Interests: </span>
              <span>
                We may process your data when it is reasonably necessary to
                achieve our legitimate business interests.
              </span>{' '}
            </p>
            <p className='paragraph'>
              <span className='subHeading'>Performance of a Contract: </span>
              <span>
                Where we have entered into a contract with you, we may process
                your personal information to fulfill the terms of our contract.
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>Legal Obligations: </span>
              <span>
                We may disclose your information where we are legally required
                to do so in order to comply with applicable law, governmental
                requests, a judicial proceeding, court order, or legal process,
                such as in response to a court order or a subpoena (including in
                response to public authorities to meet national security or law
                enforcement requirements).
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>Vital Interests: </span>
              <span>
                We may disclose your information where we believe it is
                necessary to investigate, prevent, or take action regarding
                potential violations of our policies, suspected fraud,
                situations involving potential threats to the safety of any
                person and illegal activities, or as evidence in litigation in
                which we are involved.
              </span>
            </p>
            <p className='paragraph'>
              More specifically, we may need to process your data or share your
              personal information in the following situations:
            </p>
            <p className='paragraph'>
              <span className='subHeading'>
                Vendors, Consultants and Other Third-Party Service Providers.{' '}
              </span>
              <span>
                We may share your data with third party vendors, service
                providers, contractors or agents who perform services for us or
                on our behalf and require access to such information to do that
                work. Examples include: payment processing, data analysis, email
                delivery, hosting services, customer service and marketing
                efforts. We may allow selected third parties to use tracking
                technology on the Apps, which will enable them to collect data
                about how you interact with the Apps over time. This information
                may be used to, among other things, analyze and track data,
                determine the popularity of certain content and better
                understand online activity. Unless described in this Policy, we
                do not share, sell, rent or trade any of your information with
                third parties for their promotional purposes.
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>Business Transfers. </span>
              <span>
                We may share or transfer your information in connection with, or
                during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to
                another company.
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>Third-Party Advertisers. </span>
              <span>
                We may use third-party advertising companies to serve ads when
                you visit the Apps. These companies may use information about
                your visits to our Website(s) and other websites that are
                contained in web cookies and other tracking technologies in
                order to provide advertisements about goods and services of
                interest to you.
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>Affiliates. </span>
              <span>
                We may share your information with our affiliates, in which case
                we will require those affiliates to honor this privacy policy.
                Affiliates include our parent company and any subsidiaries,
                joint venture partners or other companies that we control or
                that are under common control with us.
              </span>
            </p>
            <p className='paragraph'>
              <span className='subHeading'>Business Partners. </span>
              <span>
                We may share your information with our business partners to
                offer you certain products, services or promotions.
              </span>
            </p>
            <p className='mainHeading'>
              4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?{' '}
            </p>
            <p className='paragraph'>
              The Apps may contain advertisements from third parties that are
              not affiliated with us and which may link to other websites,
              online services or mobile applications. We cannot guarantee the
              safety and privacy of data you provide to any third parties. Any
              data collected by third parties is not covered by this privacy
              policy. We are not responsible for the content or privacy and
              security practices and policies of any third parties, including
              other websites, services or applications that may be linked to or
              from the Apps. You should review the policies of such third
              parties and contact them directly to respond to your questions.
            </p>
            <p className='mainHeading'>
              5. HOW LONG DO WE KEEP YOUR INFORMATION?{' '}
            </p>
            <p className='paragraph'>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy policy, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting or other legal requirements). No purpose in this
              policy will require us keeping your personal information for
              longer than the period of time in which users have an account with
              us.{' '}
            </p>
            <p className='paragraph'>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize it, or,
              if this is not possible (for example, because your personal
              information has been stored in backup archives), then we will
              securely store your personal information and isolate it from any
              further processing until deletion is possible.
            </p>

            <p className='mainHeading'>
              6. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </p>

            <p className='paragraph'>
              We have implemented appropriate technical and organisational
              security measures designed to protect the security of any personal
              information we process. However, please also remember that we
              cannot guarantee that the internet itself is 100% secure. Although
              we will do our best to protect your personal information,
              transmission of personal information to and from our Apps is at
              your own risk. You should only access the services within a secure
              environment.
            </p>
            <p className='mainHeading'>
              7. DO WE COLLECT INFORMATION FROM MINORS?
            </p>
            <p className='paragraph'>
              By using the Apps, you represent that you are at least 13 or that
              you are the parent or guardian of such a minor and consent to such
              minor dependent’s use of the Apps. If we learn that personal
              information from users less than 13 years of age has been
              collected, we will deactivate the account and take reasonable
              measures to promptly delete such data from our records. If you
              become aware of any data we have collected from children under age
              13, please contact us at eunicLab.co@gmail.com.
            </p>
            <p className='mainHeading'>8. WHAT ARE YOUR PRIVACY RIGHTS?</p>
            <p className='paragraph'>
              In some regions (like the European Economic Area), you have
              certain rights under applicable data protection laws. These may
              include the right (i) to request access and obtain a copy of your
              personal information, (ii) to request rectification or erasure;
              (iii) to restrict the processing of your personal information; and
              (iv) if applicable, to data portability. In certain circumstances,
              you may also have the right to object to the processing of your
              personal information. To make such a request, please use the
              contact details provided below. We will consider and act upon any
              request in accordance with applicable data protection laws.{' '}
            </p>
            <p className='paragraph'>
              If we are relying on your consent to process your personal
              information, you have the right to withdraw your consent at any
              time. Please note however that this will not affect the lawfulness
              of the processing before its withdrawal.{' '}
            </p>
            <p className='paragraph'>
              If you are resident in the European Economic Area and you believe
              we are unlawfully processing your personal information, you also
              have the right to complain to your local data protection
              supervisory authority. You can find their contact details here:
              http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
            </p>
            <p className='paragraph'>
              <span className='subHeading'>Account Information: </span>
              If you would at any time like to review or change the information
              in your account or terminate your account, you can contact us
              using the contact information provided. Upon your request to
              terminate your account, we will deactivate or delete your account
              and information from our active databases. However, some
              information may be retained in our files to prevent fraud,
              troubleshoot problems, assist with any investigations, enforce our
              Terms of Use and/or comply with legal requirements.
            </p>
            <p className='mainHeading'>9. CONTROLS FOR DO-NOT-TRACK FEATURES</p>
            <p className='paragraph'>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track (“DNT”) feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. No
              uniform technology standard for recognizing and implementing DNT
              signals has been finalized. As such, we do not currently respond
              to DNT browser signals or any other mechanism that automatically
              communicates your choice not to be tracked online. If a standard
              for online tracking is adopted that we must follow in the future,
              we will inform you about that practice in a revised version of
              this Privacy Policy.
            </p>
            <p className='mainHeading'>
              10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </p>
            <p className='paragraph'>
              California Civil Code Section 1798.83, also known as the “Shine
              The Light” law, permits our users who are California residents to
              request and obtain from us, once a year and free of charge,
              information about categories of personal information (if any) we
              disclosed to third parties for direct marketing purposes and the
              names and addresses of all third parties with which we shared
              personal information in the immediately preceding calendar year.
              If you are a California resident and would like to make such a
              request, please submit your request in writing to us using the
              contact information provided below.{' '}
            </p>
            <p className='paragraph'>
              If you are under 18 years of age, reside in California, and have a
              registered account with the Apps, you have the right to request
              removal of unwanted data that you publicly post on the Apps. To
              request removal of such data, please contact us using the contact
              information provided below, and include the email address
              associated with your account and a statement that you reside in
              California. We will make sure the data is not publicly displayed
              on the Apps, but please be aware that the data may not be
              completely or comprehensively removed from our systems.
            </p>
            <p className='mainHeading'>
              11. DO WE MAKE UPDATES TO THIS POLICY?{' '}
            </p>
            <p className='paragraph'>
              We may update this privacy policy from time to time. The updated
              version will be indicated by an updated “Revised” date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy policy, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this privacy policy frequently to be informed of how we are
              protecting your information.
            </p>
            <p className='mainHeading'>
              12. HOW CAN YOU CONTACT US ABOUT THIS POLICY?
            </p>
            <p className='paragraph'>
              If you have questions or comments about this policy, you may
              contact our Data Protection Officer (DPO), Eunice Nnaji, by email
              at eunicLab.co@gmail.com. If you are a resident in the European
              Economic Area, the "data controller" of your personal information
              is eunicLab. eunicLab has appointed Eunice Nnaji to be its
              representative in the EEA. You can contact them directly regarding
              the processing of your information by eunicLab, by email at
              eunicLab.co@gmail.com.
            </p>
            <p className='subHeading'>Last updated July 26, 2020</p>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
};
export default PrivacyPolciy;
