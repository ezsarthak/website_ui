import React from "react";
import Image from "next/image";

export default function Section4_3() {
  return (
    <section className="rt-counter-v1">
      <div className="w-layout-blockcontainer rt-container-medium-v2 w-container">
        <div className="w-layout-vflex rt-counter-main-wrapper">
          <div className="w-layout-vflex rt-counter-top-content rt-counter-top-gap rt-mobile-text-center">
            <div
              data-w-id="b84fa72e-ebbb-1829-3323-dbfdece63101"
              
              className="rt-sub-text rt-small-tag-gap"
            >
              Built For
            </div>
            <div
              data-w-id="21d222e7-a15c-dddd-3680-0ddcd249c00f"
              className="rt-position-relative rt-overflow-hidden"
            >
              <h2
                data-w-id="682875c8-e66a-2e54-9801-2827517b9a26"
                
                className="rt-gap-off"
              >
                Designed for busy clinics that want to grow without the chaos
              </h2>
              <div className="rt-absolute-strech rt-event-none rt-tab-none">
                <div className="rt-text-overlay rt-overlay-1" />
                <div className="rt-text-overlay rt-overlay-2" />
                <div className="rt-text-overlay rt-overlay-3" />
              </div>
            </div>
          </div>
          <div className="w-layout-hflex rt-counter-bottom-wrapper">
            <div
              data-w-id="15f622bf-81a7-7420-b236-c55478740cf5"
              
              className="w-layout-vflex rt-counter-item-card-one rt-mobile-text-center"
            >
              <div className="rt-counter-icon-gap">
                <Image 
                  src="/fonts/697304590d52897b1a291422_Healh_Care.svg"
                  loading="lazy"
                  width={61}
                  height={61}
                  alt="Health Care"
                />
              </div>
              <div className="rt-counter-line rt-counter-line-gap" />
              <div className="rt-text-style-h6 rt-counter-title-gap">
                Built For Receptionists
              </div>
              <p className="rt-gap-off rt-secondary-text-color">
                Appointment scheduling, queue management and patient communication.
              </p>
            </div>
            <div
              data-w-id="44dcd10b-122d-955e-ff8c-1f54b45e48cc"
              
              className="w-layout-vflex rt-counter-item-card-one rt-mobile-text-center"
            >
              <div className="rt-counter-icon-gap">
                <Image 
                  src="/fonts/6973045a0b0a48f7d7c1d269_Awards.svg"
                  loading="lazy"
                  width={61}
                  height={62}
                  alt="Awards"
                />
              </div>
              <div className="rt-counter-line rt-counter-line-gap" />
              <div className="rt-text-style-h6 rt-counter-title-gap">
                Built For Doctors
              </div>
              <p className="rt-gap-off rt-secondary-text-color">
                Digital records, prescriptions and follow-up tracking.
              </p>
            </div>
            <div
              data-w-id="227e9815-f199-1c2a-99ec-3394af6ad0a6"
              
              className="w-layout-vflex rt-counter-item-card-one rt-mobile-text-center"
            >
              <div className="rt-counter-icon-gap">
                <Image 
                  src="/fonts/6973045909e28a21e06686bf_Client_Satisfaction.svg"
                  loading="lazy"
                  width={58}
                  height={60}
                  alt="Client Satisfaction"
                />
              </div>
              <div className="rt-counter-line rt-counter-line-gap" />
              <div className="rt-text-style-h6 rt-counter-title-gap">
                Built For Clinics
              </div>
              <p className="rt-gap-off rt-secondary-text-color">
                Improved retention and smoother operations.
              </p>
            </div>
            <div
              data-w-id="a6978c81-ba19-6dc2-4c5a-f3651f551f18"
              
              className="w-layout-vflex rt-counter-item-card-one rt-counter-item-card-one-v2 rt-mobile-text-center"
            >
              <div className="rt-counter-icon-gap">
                <Image 
                  src="/fonts/6973045976366a0092ddf7f1_Medical_Specialist.svg"
                  loading="lazy"
                  width={60}
                  height={61}
                  alt="Analytics Icon"
                />
              </div>
              <div className="rt-counter-line rt-counter-line-gap" />
              <div className="rt-text-style-h6 rt-counter-title-gap">
                Built For Patients
              </div>
              <p className="rt-gap-off rt-secondary-text-color">
                Appointments, reminders and better continuity of care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
