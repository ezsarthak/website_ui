import React from "react";

export default function SpecialistLarkinjomesSection1() {
  return (
    <div
      style={{ opacity: 0, display: "none" }}
      className="w-layout-hflex rt-appointment-book-wrapper"
    >
      <div
        style={{
          WebkitTransform:
            "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          MozTransform:
            "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          msTransform:
            "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          transform:
            "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        }}
        className="rt-appoint-ment-form-block w-form"
      >
        <div
          data-w-id="c38ed790-ff2f-fa1d-0a45-31246499d4b5"
          className="w-layout-hflex rt-appointment-cross-logo"
        >
          <img
            src="/assets/696f017270bc35c55e784979_69ae77409b027662e6642cf4_Cross_20logo.svg"
            loading="lazy"
            width={49}
            height={49}
            alt="Cross logo"
          />
        </div>
        <form
          id="email-form"
          name="email-form"
          data-name="Email Form"
          method="get"
          className="rt-appointment-form-body"
          data-wf-page-id="698562dd4b3fc6b8c9903adf"
          data-wf-element-id="ec54aaf4-dac3-71ce-27c5-73843cd74ced"
        >
          <div className="w-layout-vflex rt-appointment-form-text-box rt-text-center">
            <div className="rt-appointment-title-text">
              <h2 className="rt-gap-off">Confirm your booking instantly!</h2>
            </div>
            <p className="rt-gap-off rt-secondary-text-color">
              Quick scheduling, priority access, and seamless confirmation.
            </p>
          </div>
          <div className="w-layout-vflex rt-appointment-form">
            <div className="w-layout-vflex rt-appointment-form-box">
              <input
                className="rt-textfield-v3 w-input"
                maxLength={256}
                name="name"
                data-name="Name"
                placeholder="First name"
                type="text"
                id="first-name"
                required
              />
              <input
                className="rt-textfield-v3 w-input"
                maxLength={256}
                name="name"
                data-name="Name"
                placeholder="Last name"
                type="text"
                id="last-name"
                required
              />
              <div className="w-layout-hflex rt-appointment-form-line-box">
                <input
                  className="rt-textfield-v3 w-input"
                  maxLength={256}
                  name="email"
                  data-name="email"
                  placeholder="Email"
                  type="email"
                  id="email-V2"
                  required
                />
                <input
                  className="rt-textfield-v3 w-input"
                  maxLength={256}
                  name="email"
                  data-name="email"
                  placeholder="Number*"
                  type="tel"
                  id="email"
                  required
                />
              </div>
              <div className="w-layout-hflex rt-appointment-form-line-box">
                <div className="w-layout-vflex rt-appointment-stretch">
                  <input
                    type="date"
                    placeholder="Date*"
                    required
                    className="rt-textfield-v4"
                  />
                </div>
                <div className="w-layout-vflex rt-appointment-stretch">
                  <input
                    type="time"
                    placeholder="Time"
                    required
                    className="rt-textfield-v4"
                  />
                </div>
              </div>
            </div>
            <div
              data-w-id="0ec16597-3120-b30e-1a5d-2a3d1125ff7a"
              className="rt-position-relative"
            >
              <a
                data-wf--rt-button--variant="base"
                data-w-id="36ee05a8-1a3a-f1af-b31b-d4bb524a6fd3"
                href="#"
                className="rt-button rt-overflow-hidden w-inline-block"
              >
                <div className="w-layout-hflex rt-text-button-wrapper rt-button-text">
                  <div className="rt-text-color-white rt-1">
                    Ask for appointment
                  </div>
                  <div className="rt-text-color-white rt-change-text rt-2">
                    Ask for appointment
                  </div>
                </div>
                <div className="rt-button-overlay" />
              </a>
              <input
                type="submit"
                data-wait="Please wait..."
                className="rt-submit-button w-button"
                defaultValue="Submit Now"
              />
            </div>
          </div>
        </form>
        <div className="rt-success-message w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="rt-error-message w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  );
}
