/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

export default function ContactSection1() {
  return (
    <section
      data-w-id="5e78f14a-3a7e-7956-435e-688c2a349961"
      className="rt-contact-hero rt-position-relative rt-overflow-hidden"
    >
      <div
        style={{
          WebkitTransform:
            "translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          MozTransform:
            "translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          msTransform:
            "translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          transform:
            "translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        }}
        className="rt-contact-background-image-wrapper"
      >
        <Image 
          src="/monavi/service_page_bg.webp"
          alt="Contact Banner Background"
          width={1920}
          height={687}
          className="rt-contact-banner-position"
        />
      </div>
      <div className="w-layout-blockcontainer rt-container-extra-large w-container">
        <div className="w-layout-vflex rt-hero-contact-main rt-position-relative">
          <div className="w-layout-vflex rt-contact-hero-top rt-text-center rt-top-content-gap-v2">
            <div
              data-w-id="df59d03d-a22a-641a-3beb-f58e478d6e76"
              
              className="rt-sub-text-v2 rt-small-tag-gap"
            >
              Contact Us
            </div>
            <h1
              data-w-id="df59d03d-a22a-641a-3beb-f58e478d6e78"
              
              className="rt-gap-off"
            >
              Get in touch with the Monavi team
            </h1>
          </div>
          <div
            data-w-id="81c11af8-4e42-896f-628a-9cd75a64487a"
            
            className="w-layout-hflex rt-hero-left-bottom-v2 rt-border-radius-10"
          >
            <div className="w-layout-vflex rt-hero-bottom-left rt-border-radius-10 rt-overflow-hidden">
              <div
                data-poster-url="/assets/696f017270bc35c55e784979_6984446d2e0a6686374a68e0_6011424-uhd_3840_2160_25fps_poster.0000000.jpg"
                data-video-urls="/assets/696f017270bc35c55e784979_6984446d2e0a6686374a68e0_6011424-uhd_3840_2160_25fps_mp4.mp4_https___cdn.prod.website-files.com_696f017270bc35c55e784979_6984446d2e0a6686374a68e0_6011424-uhd_3840_2160_25fps_webm.webm"
                data-autoplay="true"
                data-loop="true"
                data-wf-ignore="true"
                className="rt-pricing-video w-background-video w-background-video-atom"
              >
                <Image width={800} height={600}  src="/monavi/patient.webp" className="w-background-video" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="monavi-image" />
                <noscript>
                  &lt;style&gt; [data-wf-bgvideo-fallback-img] {"{"}
                  display: none;
                  {"}"}
                  @media (prefers-reduced-motion: reduce) {"{"}
                  [data-wf-bgvideo-fallback-img] {"{"}
                  position: absolute; z-index: -100; display: inline-block;
                  height: 100%; width: 100%; object-fit: cover;
                  {"}"}
                  {"}"}&lt;/style&gt;&lt;img data-wf-bgvideo-fallback-img="true"
                  src="/monavi/patient.webp"
                  alt="image"&gt;
                </noscript>
                <div aria-live="polite">
                  <button
                    type="button"
                    data-w-bg-video-control="true"
                    aria-controls="cdb5ed97-386f-96b8-80a8-8092122dd603-video"
                    className="w-backgroundvideo-backgroundvideoplaypausebutton rt-video-play-pause-button w-background-video--control"
                  >
                    <span className="rt-play-state">
                      <Image 
                        src="/assets/696f017270bc35c55e784979_69859766f0b870a5b7b1129c_Pause_20icon.svg"
                        loading="lazy"
                        width={7}
                        height={10}
                        alt="Pause video"
                      />
                    </span>
                    <span hidden className="rt-pause-state">
                      <Image 
                        loading="lazy"
                        width={7}
                        height={10}
                        src="/assets/696f017270bc35c55e784979_6980224bdac4a2081698b5af_Play_20Button.svg"
                        alt="Play video"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-layout-vflex rt-hero-bottom-right">
              <div className="rt-position-relative">
                <div>
                  Bring order to your clinic operations{" "}
                  <span className="rt-line-text">today</span>
                </div>
              </div>
              <a
                href="/service"
                className="rt-hero-botom-right-button w-inline-block"
              >
                <div className="w-layout-vflex">
                  <Image 
                    src="/assets/696f017270bc35c55e784979_6980224b3f3c129452af2436_Right_20Arrow.svg"
                    loading="lazy"
                    width={13}
                    height={13}
                    alt="image"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
