import React from "react";
import Image from "next/image";

export default function ServiceSection1() {
  return (
    <section
      data-w-id="56b389a3-9a97-9822-95a8-025e56880a9c"
      className="rt-service-hero-section rt-position-relative rt-overflow-hidden"
    >
      <div
        data-w-id="54656bea-a361-86f4-2658-81e77b397f84"
        className="rt-contact-background-image-wrapper"
      >
        <Image 
          src="/monavi/service_page_bg.webp"
          alt="Service Banner Background"
          width={1920}
          height={843}
          className="rt-service-image-position"
        />
      </div>
      <div className="w-layout-blockcontainer rt-container-medium-v2 w-container">
        <div className="w-layout-vflex rt-service-hero-main rt-position-relative rt-mobile-text-center">
          <h1
            data-w-id="06ff925e-a5bc-6278-8896-e796e9eac86a"
            
            className="rt-gap-off rt-hero-heading-gap"
          >
            Bring Patients Back. Reduce Clinic Chaos.
          </h1>
          <p
            data-w-id="61503c8b-78bb-a868-ad9e-233f88974e29"
            
            className="rt-gap-off rt-hero-description-gap rt-service-description"
          >
            MONAVI is a smart clinic flow and patient return system that automates follow-ups, manages queues, and retains patients.
          </p>
          <div className="w-layout-hflex rt-hero-service-button-wrapper rt-button-wrapper-gap">
            <div
              data-w-id="664d2005-4338-8503-fe54-69f25031155f"
              
            >
              <a
                data-wf--rt-button--variant="base"
                data-w-id="36ee05a8-1a3a-f1af-b31b-d4bb524a6fd3"
                href="/appointment-schedule"
                className="rt-button rt-overflow-hidden w-inline-block"
              >
                <div className="w-layout-hflex rt-text-button-wrapper rt-button-text">
                  <div className="rt-text-color-white rt-1">
                    Get Started
                  </div>
                  <div className="rt-text-color-white rt-change-text rt-2">
                    Get Started
                  </div>
                </div>
                <div className="rt-button-overlay" />
              </a>
            </div>
            <div
              data-w-id="911ecf77-4d57-d0a7-8114-7e8fe11a1f76"
              
            >
              <a
                data-wf--rt-button-v2--variant="base"
                data-w-id="69160621-07e6-8ff3-8e12-69b2c36008f0"
                href="/about"
                className="rt-button-v5 w-inline-block"
              >
                <div className="w-layout-hflex rt-text-button-wrapper rt-button-text">
                  <div className="rt-body-font-color rt-1">View Features</div>
                  <div className="rt-body-font-color rt-change-text rt-2">
                    View Features
                  </div>
                </div>
                <div className="rt-button-overlay" />
              </a>
            </div>
          </div>
          <div
            data-w-id="bc1d85bc-784c-3893-d7f7-5c8821c5ce4b"
            
            className="w-layout-hflex rt-hero-service-bottom"
          >
            <div className="w-layout-vflex rt-statisfied-patient-image-wrapper">
              <Image 
                src="/assets/696f017270bc35c55e784979_69783fe9e1caad94b13a2f35_Satisfied_20patient.webp"
                loading="lazy"
                width={115}
                height={35}
                alt="Satisfied patient Photos"
              />
            </div>
            <div className="w-layout-vflex rt-hero-right-top-right">
              <div className="w-layout-hflex rt-hero-star-wrapper">
                <div>
                  <Image 
                    src="/assets/696f017270bc35c55e784979_69783f94d83ac256daf590c0_Star_20Icon_20_2_.svg"
                    loading="lazy"
                    width={18}
                    height={17}
                    alt="Star"
                  />
                </div>
                <div>
                  <Image 
                    src="/assets/696f017270bc35c55e784979_69783f94d83ac256daf590c0_Star_20Icon_20_2_.svg"
                    loading="lazy"
                    width={18}
                    height={17}
                    alt="Star"
                  />
                </div>
                <div>
                  <Image 
                    src="/assets/696f017270bc35c55e784979_69783f94d83ac256daf590c0_Star_20Icon_20_2_.svg"
                    loading="lazy"
                    width={18}
                    height={17}
                    alt="Star"
                  />
                </div>
                <div>
                  <Image 
                    src="/assets/696f017270bc35c55e784979_69783f94d83ac256daf590c0_Star_20Icon_20_2_.svg"
                    loading="lazy"
                    width={18}
                    height={17}
                    alt="Star"
                  />
                </div>
              </div>
              <div>100k+ Patients Managed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
