<template>
  <div class="ui massive center aligned padded segment about">
    <h2>OpenID Verifiable credentials Issuance implementation</h2>
    <p>This Proof of Concept aims to demonstrate the issuance of verifiable credentials departing from an openid federation.</p>
    <p>boruta server demonstrate verifialbe credentials issuance following <a href="https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html" target="_blank">OpenID for Verifiable Credential Issuance - draft 12</a> and is designed to be compatible with the <a href="https://altme.io">Altme</a> wallet.</p>
    <p>Following the get credential offer link, you will be asked to login with your google account, then a credential offer will be displayed as a QR code. Scanning it with an Altme wallet will provide you the according credential with your information detained by google back to your phone.</p>
  </div>
</template>
