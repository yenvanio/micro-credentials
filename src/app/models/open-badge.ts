export interface OpenBadge {
    entityType: string,
    entityId: string,
    openBadgeId: string,
    createdAt: string,
    createdBy: string,
    badgeclass: string,
    badgeclassOpenBadgeId: string,
    issuer: string,
    issuerOpenBadgeId: string,
    image: string,
    recipient: Recipient,
    issuedOn: string,
    narrative: string,
    evidence: Evidence[],
    revoked: boolean,
    revocationReason: string,
    acceptance: string,
    expires: string,
    extensions: string,
    badgeclassName: string
  }

  export interface Evidence {
    url: string,
    narrative: string
  }

  export interface Recipient {
    identity: string,
    type: string,
    hashed: boolean,
    plaintextIdentity: string
  }