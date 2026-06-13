import React from "react";

export default function Footer() {
  return (
    <section className="rt-footer">
      <div className="w-layout-blockcontainer rt-container-medium w-container">
        <div className="w-layout-vflex rt-footer-main-wrapper">
          <div className="w-layout-hflex rt-footer-top-wrapper rt-footer-top-gap">
            <div className="w-layout-vflex rt-footer-top-left-v2 rt-1">
              <div className="rt-text-style-h6 rt-text-color-soft-ash rt-footer-title-gap">
                Get in touch
              </div>
              <div className="w-layout-vflex rt-footer-link">
                <a
                  href="mailto:hello@monavi.in"
                  className="rt-link-decor-off rt-text-style-h5 rt-footer-link-text-color"
                >
                  hello@monavi.in
                </a>
                <a
                  href="tel:8884567890"
                  className="rt-link-decor-off rt-text-style-h5 rt-footer-link-text-color"
                >
                  (888) 456 - 7890
                </a>
              </div>
            </div>
            <div className="w-layout-hflex rt-footer-top-right-wrapper">
              <div className="w-layout-vflex rt-footer-top-left-v2 rt-2">
                <div className="rt-text-style-h6 rt-text-color-soft-ash rt-footer-title-gap">
                  Get in touch
                </div>
                <div className="w-layout-vflex rt-footer-link">
                  <a
                    href="mailto:hello@monavi.in"
                    className="rt-link-decor-off rt-text-style-h5 rt-text-color-white"
                  >
                    hello@monavi.in
                  </a>
                  <a
                    href="tel:8884567890"
                    className="rt-link-decor-off rt-text-style-h5 rt-text-color-white"
                  >
                    (888) 456 7890
                  </a>
                </div>
              </div>
              <div className="w-layout-vflex rt-footer-link-wrapper rt-max-width-decrease-v2">
                <div className="rt-text-style-h6 rt-text-color-soft-ash rt-footer-title-gap">
                  Main pages
                </div>
                <div className="w-layout-vflex rt-footer-link rt-footer-link-gap">
                  <a
                    href="/"
                    aria-current="page"
                    className="rt-link-decor-off rt-text-color-white rt-link-text-hover w--current"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="rt-link-decor-off rt-text-color-white rt-link-text-hover"
                  >
                    About
                  </a>
                  <a
                    href="/pricing"
                    className="rt-link-decor-off rt-text-color-white rt-link-text-hover"
                  >
                    Pricing
                  </a>
                  <a
                    href="/contact"
                    className="rt-link-decor-off rt-text-color-white rt-link-text-hover"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="w-layout-vflex rt-footer-link-wrapper rt-max-width-decrease">
                <div className="rt-text-style-h6 rt-text-color-soft-ash rt-footer-title-gap">
                  Utility pages
                </div>
                <div className="w-layout-vflex rt-footer-link rt-footer-link-gap">
                  <a
                    href="/changelog"
                    className="rt-link-decor-off rt-text-color-white rt-link-text-hover"
                  >
                    Changelog
                  </a>
                  <a
                    href="/401"
                    className="rt-link-decor-off rt-text-color-white rt-link-text-hover"
                  >
                    Password protected
                  </a>
                  <a
                    href="/404"
                    className="rt-link-decor-off rt-text-color-white rt-link-text-hover"
                  >
                    404
                  </a>
                </div>
              </div>
              <div className="w-layout-vflex rt-footer-link-wrapper">
                <div className="rt-text-style-h6 rt-text-color-soft-ash rt-footer-title-gap">
                  Address
                </div>
                <div className="w-layout-vflex rt-footer-link">
                  <div className="rt-text-color-white">
                    MonaviOne Technologies Pvt Ltd, India
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-w-id="e22294f6-8063-8b01-fc45-cc3c0e6664e0"
            className="w-layout-hflex rt-footer-medium-wrapper rt-footer-medium-gap rt-event-none"
          >
            <div className="rt-font-size-500 rt-text-color-soft-ash rt-1">
              M
            </div>
            <div className="rt-font-size-500 rt-text-color-soft-ash rt-2">
              O
            </div>
            <div className="rt-font-size-500 rt-text-color-soft-ash rt-3">
              N
            </div>
            <div className="rt-font-size-500 rt-text-color-soft-ash rt-4">
              A
            </div>
            <div className="rt-font-size-500 rt-text-color-soft-ash rt-5">
              V
            </div>
            <div className="rt-font-size-500 rt-text-color-soft-ash rt-6">
              I
            </div>
          </div>
          <div className="w-layout-hflex rt-footer-bottom-wrapper">
            <div className="rt-text-color-white">
              Designed by{" "}
              <a
                href="https://www.radianttemplates.com/"
                target="_blank"
                className="rt-link-decor-off rt-text-color-white rt-link-text-hover"
              >
                Radiant Templates
              </a>
              , Powered by{" "}
              <a
                href="https://webflow.com"
                target="_blank"
                className="rt-link-decor-off rt-text-color-white rt-link-text-hover"
              >
                Webflow.
              </a>
            </div>
            <div className="rt-text-color-white">
              <a
                href="/license"
                className="rt-link-decor-off rt-text-color-white rt-link-text-hover"
              >
                License
              </a>{" "}
              &nbsp;| &nbsp;
              <a
                href="/style-guide"
                className="rt-link-decor-off rt-text-color-white rt-link-text-hover"
              >
                Style-guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
