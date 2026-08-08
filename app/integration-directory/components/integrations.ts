import type { Integration } from "./IntegrationCard";

/**
 * Icons live in /public/integration-directory, one file per card, named after
 * the card it serves. The Figma export ships six glyphs twice (once per card
 * instance), so a few files are byte-identical to each other — that is the
 * export's doing, not a wiring mistake.
 */

export const integrations: Integration[] = [
  {
    name: "Payroll provider",
    kind: "API connector",
    description:
      "Send approved, reconciled time to your payroll system via a governed API connection.",
    protocol: "API",
    status: "Available",
    tint: "teal",
    icon: "payroll-provider.png",
  },
  {
    name: "Payroll batch",
    kind: "SFTP / file",
    description:
      "Deliver approved time as scheduled batch files with manifest and reconciliation.",
    protocol: "SFTP",
    status: "Available",
    tint: "red",
    icon: "payroll-batch.png",
  },
  {
    name: "Timesheet export",
    kind: "CSV",
    description:
      "Export payroll-ready time as validated CSV for manual or scripted import.",
    protocol: "CSV",
    status: "Available",
    tint: "orange",
    icon: "timesheet-export.png",
  },
  {
    name: "HRIS / HCM",
    kind: "API connector",
    description:
      "Sync workers, org units, and employment status from your HR system of record.",
    protocol: "API",
    status: "Available",
    tint: "teal",
    icon: "hris-hcm.png",
  },
  {
    name: "Worker directory",
    kind: "SCIM 2.0",
    description: "Provision and deprovision workers automatically via SCIM.",
    protocol: "SCIM",
    status: "Available",
    tint: "indigo",
    icon: "worker-directory.png",
  },
  {
    name: "Single sign-on",
    kind: "SAML 2.0",
    description: "Authenticate users through your SAML 2.0 identity provider.",
    protocol: "SAML",
    status: "Available",
    tint: "indigo",
    icon: "sso-saml.png",
  },
  {
    name: "Single sign-on",
    kind: "OIDC",
    description: "Authenticate users through an OpenID Connect provider.",
    protocol: "OIDC",
    status: "Available",
    tint: "blue",
    icon: "sso-oidc.png",
  },
  {
    name: "Directory sync",
    kind: "SCIM 2.0",
    description: "Keep users and roles in sync with your identity directory.",
    protocol: "SCIM",
    status: "Available",
    tint: "indigo",
    icon: "directory-sync.png",
  },
  {
    name: "MFA / step-up",
    kind: "IdP-driven",
    description:
      "Enforce multi-factor and step-up auth via your identity provider.",
    protocol: "IdP",
    status: "Requires setup",
    tint: "red",
    icon: "mfa-step-up.png",
  },
  {
    name: "General ledger",
    kind: "API connector",
    description: "Post governed cost and time data to your accounting ledger.",
    protocol: "API",
    status: "Requires setup",
    tint: "blue",
    icon: "general-ledger.png",
  },
  {
    name: "ERP / project ledger",
    kind: "API connector",
    description: "Reconcile project time and cost with your ERP or PSA system.",
    protocol: "API",
    status: "Beta",
    tint: "blue",
    icon: "erp-project-ledger.png",
  },
  {
    name: "Billing / invoicing",
    kind: "API connector",
    description: "Feed approved billable time into your invoicing workflow.",
    protocol: "API",
    status: "Requires setup",
    tint: "orange",
    icon: "billing-invoicing.png",
  },
  {
    name: "Calendar",
    kind: "iCal / API",
    description:
      "Read schedules and availability windows from calendar systems.",
    protocol: "iCal",
    status: "Available",
    tint: "blue",
    icon: "calendar.png",
  },
  {
    name: "Scheduling system",
    kind: "API connector",
    description: "Import shift schedules and work patterns for coverage.",
    protocol: "API",
    status: "Beta",
    tint: "teal",
    icon: "scheduling-system.png",
  },
  {
    name: "Alerts",
    kind: "Webhook",
    description:
      "Send exception and review alerts to your incident or ops tooling.",
    protocol: "Webhook",
    status: "Available",
    tint: "red",
    icon: "alerts.png",
  },
  {
    name: "Chat notifications",
    kind: "Webhook",
    description: "Post review and evidence notifications to a team channel.",
    protocol: "Webhook",
    status: "Requires setup",
    tint: "blue",
    icon: "chat-notifications.png",
  },
  {
    name: "Data warehouse",
    kind: "Export",
    description: "Export governed, aggregate datasets to your warehouse.",
    protocol: "Export",
    status: "Beta",
    tint: "blue",
    icon: "data-warehouse.png",
  },
  {
    name: "BI / reporting",
    kind: "Export",
    description: "Feed aggregate reporting data into your BI tool.",
    protocol: "Export",
    status: "Planned",
    tint: "teal",
    icon: "bi-reporting.png",
  },
  {
    name: "Webhooks",
    kind: "Events",
    description:
      "Subscribe to record, review, and evidence events with signed payloads.",
    protocol: "Events",
    status: "Available",
    tint: "teal",
    icon: "webhooks.png",
  },
  {
    name: "REST API",
    kind: "API",
    description: "Build custom integrations on the governed ZoikoTime REST API.",
    protocol: "REST",
    status: "Available",
    tint: "teal",
    icon: "rest-api.png",
  },
  {
    name: "SFTP / CSV",
    kind: "File transfer",
    description:
      "Move governed files in and out on a schedule with reconciliation.",
    protocol: "SFTP",
    status: "Available",
    tint: "orange",
    icon: "sftp-csv.png",
  },
];

export const standards: { name: string; body: string; icon: string }[] = [
  { name: "SAML 2.0", body: "SSO federation", icon: "standard-saml.png" },
  { name: "OpenID Connect", body: "Modern auth", icon: "standard-oidc.png" },
  { name: "SCIM 2.0", body: "User provisioning", icon: "standard-scim.png" },
  { name: "Webhooks", body: "Signed events", icon: "standard-webhooks.png" },
  { name: "REST API", body: "Custom builds", icon: "standard-rest-api.png" },
  { name: "SFTP / CSV", body: "Governed files", icon: "standard-sftp.png" },
];
