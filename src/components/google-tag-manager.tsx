import Script from "next/script";

const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/;

export function getGoogleTagManagerId() {
  const value = process.env.NEXT_PUBLIC_GTM_ID?.trim();
  return value && GTM_ID_PATTERN.test(value) ? value : null;
}

export function GoogleTagManagerScript({ id }: { id: string }) {
  return <>
    <script
      id="growthlabs-consent-default"
      dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});` }}
    />
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`}
    </Script>
  </>;
}

export function GoogleTagManagerNoScript({ id }: { id: string }) {
  return <noscript><iframe
    src={`https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(id)}`}
    height="0"
    width="0"
    title="Google Tag Manager"
    aria-hidden="true"
    tabIndex={-1}
    style={{ display: "none", visibility: "hidden" }}
  /></noscript>;
}
