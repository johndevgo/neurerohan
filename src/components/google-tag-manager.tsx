/* eslint-disable @next/next/next-script-for-ga -- The supplied GTM header/body snippets must be emitted directly and use a fixed public container ID. */
export const GOOGLE_TAG_MANAGER_ID = "GTM-59D6JGLP";

export function GoogleTagManagerScript() {
  return <>
    <script
      id="growthlabs-consent-default"
      dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});` }}
    />
    <script
      id="google-tag-manager"
      dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');` }}
    />
  </>;
}

export function GoogleTagManagerNoScript() {
  return <noscript><iframe
    src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
    height="0"
    width="0"
    title="Google Tag Manager"
    aria-hidden="true"
    tabIndex={-1}
    style={{ display: "none", visibility: "hidden" }}
  /></noscript>;
}
