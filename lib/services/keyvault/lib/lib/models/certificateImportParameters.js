/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The certificate import parameters.
 *
 */
class CertificateImportParameters {
  /**
   * Create a CertificateImportParameters.
   * @member {string} base64EncodedCertificate Base64 encoded representation of
   * the certificate object to import. This certificate needs to contain the
   * private key.
   * @member {string} [password] If the private key in base64EncodedCertificate
   * is encrypted, the password used for encryption.
   * @member {object} [certificatePolicy] The management policy for the
   * certificate.
   * @member {string} [certificatePolicy.id] The certificate id.
   * @member {object} [certificatePolicy.keyProperties] Properties of the key
   * backing a certificate.
   * @member {boolean} [certificatePolicy.keyProperties.exportable] Indicates
   * if the private key can be exported.
   * @member {string} [certificatePolicy.keyProperties.keyType] The key type.
   * @member {number} [certificatePolicy.keyProperties.keySize] The key size in
   * bits. For example;  1024 or 2048.
   * @member {boolean} [certificatePolicy.keyProperties.reuseKey] Indicates if
   * the same key pair will be used on certificate renewal.
   * @member {object} [certificatePolicy.secretProperties] Properties of the
   * secret backing a certificate.
   * @member {string} [certificatePolicy.secretProperties.contentType] The
   * media type (MIME type).
   * @member {object} [certificatePolicy.x509CertificateProperties] Properties
   * of the X509 component of a certificate.
   * @member {string} [certificatePolicy.x509CertificateProperties.subject] The
   * subject name. Should be a valid X509 distinguished Name.
   * @member {array} [certificatePolicy.x509CertificateProperties.ekus] The
   * enhanced key usage.
   * @member {object}
   * [certificatePolicy.x509CertificateProperties.subjectAlternativeNames] The
   * subject alternative names.
   * @member {array}
   * [certificatePolicy.x509CertificateProperties.subjectAlternativeNames.emails]
   * Email addresses.
   * @member {array}
   * [certificatePolicy.x509CertificateProperties.subjectAlternativeNames.dnsNames]
   * Domain names.
   * @member {array}
   * [certificatePolicy.x509CertificateProperties.subjectAlternativeNames.upns]
   * User principal names.
   * @member {array} [certificatePolicy.x509CertificateProperties.keyUsage]
   * List of key usages.
   * @member {number}
   * [certificatePolicy.x509CertificateProperties.validityInMonths] The
   * duration that the ceritifcate is valid in months.
   * @member {array} [certificatePolicy.lifetimeActions] Actions that will be
   * performed by Key Vault over the lifetime of a certificate.
   * @member {object} [certificatePolicy.issuerParameters] Parameters for the
   * issuer of the X509 component of a certificate.
   * @member {string} [certificatePolicy.issuerParameters.name] Name of the
   * referenced issuer object or reserved names; for example, 'Self' or
   * 'Unknown'.
   * @member {string} [certificatePolicy.issuerParameters.certificateType] Type
   * of certificate to be requested from the issuer provider.
   * @member {boolean}
   * [certificatePolicy.issuerParameters.certificateTransparency] Indicates if
   * the certificates generated under this policy should be published to
   * certificate transparency logs.
   * @member {object} [certificatePolicy.attributes] The certificate
   * attributes.
   * @member {string} [certificatePolicy.attributes.recoveryLevel] Reflects the
   * deletion recovery level currently in effect for certificates in the
   * current vault. If it contains 'Purgeable', the certificate can be
   * permanently deleted by a privileged user; otherwise, only the system can
   * purge the certificate, at the end of the retention interval. Possible
   * values include: 'Purgeable', 'Recoverable+Purgeable', 'Recoverable',
   * 'Recoverable+ProtectedSubscription'
   * @member {object} [certificateAttributes] The attributes of the certificate
   * (optional).
   * @member {string} [certificateAttributes.recoveryLevel] Reflects the
   * deletion recovery level currently in effect for certificates in the
   * current vault. If it contains 'Purgeable', the certificate can be
   * permanently deleted by a privileged user; otherwise, only the system can
   * purge the certificate, at the end of the retention interval. Possible
   * values include: 'Purgeable', 'Recoverable+Purgeable', 'Recoverable',
   * 'Recoverable+ProtectedSubscription'
   * @member {object} [tags] Application specific metadata in the form of
   * key-value pairs.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CertificateImportParameters
   *
   * @returns {object} metadata of CertificateImportParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CertificateImportParameters',
      type: {
        name: 'Composite',
        className: 'CertificateImportParameters',
        modelProperties: {
          base64EncodedCertificate: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          },
          password: {
            required: false,
            serializedName: 'pwd',
            type: {
              name: 'String'
            }
          },
          certificatePolicy: {
            required: false,
            serializedName: 'policy',
            type: {
              name: 'Composite',
              className: 'CertificatePolicy'
            }
          },
          certificateAttributes: {
            required: false,
            serializedName: 'attributes',
            type: {
              name: 'Composite',
              className: 'CertificateAttributes'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CertificateImportParameters;