import { useState } from 'react';
//import {  } from '../components/utils/miscellaneous';
import Loading from 'components/loading';

const NewsletterForm = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
      return (message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? ( formattedMessage ) : null;
  }

  return (
    <div>
      <h3 className="mb-1 text-2xl font-sans text-white font-bold text-center">Join the waiting list</h3>
      <div className="flex flex-col items-center newsletter-input-fields">
        <div className="mc-field-group mt-3"> 
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Your email"
            className="bg-transparent relative font-sans
            max-h-[512px] w-full flex items-stretch rounded-3xl"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap wp-block-button">
          <button className="cursor-pointer mt-4 p-2 font-sans px-4 py-2 bg-transperant text-white hover:bg-gradient-to-b 
            from-emerald-900 to-gray-900 focus:outline-emerald-900 focus:ring-2 focus:ring-green-700 
            rounded-3xl text-lg border border-white animate-pulse-button" onClick={handleFormSubmit}>
            Sign-up
          </button>
        </div>
      </div>
      <div className="min-h-42px absolute bottom-3 right-3">
        { 'sending' === status ? <Loading showSpinner message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false}/> : null }
        {'error' === status || error ? (
          <div
            className="text-red-500 pt-2 font-bold font-sans text-lg"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {'success' === status && 'error' !== status && !error && (
          <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: (message) }} />
        )}
      </div>
    </div>
  );
}

export default NewsletterForm