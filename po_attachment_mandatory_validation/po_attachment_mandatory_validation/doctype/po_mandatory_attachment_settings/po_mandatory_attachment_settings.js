// Copyright (c) 2024, abiansyahn and contributors
// For license information, please see license.txt

frappe.ui.form.on("PO Mandatory Attachment Settings", {
	onload(frm) {
        frm.set_query("workflow_state", function (doc) {
			return {
				query: "po_attachment_mandatory_validation.po_attachment_mandatory_validation.doctype.po_mandatory_attachment_settings.po_mandatory_attachment_settings.get_workflow_state"
			};
		});
	},
});
