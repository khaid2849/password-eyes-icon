/** @odoo-module **/

import { registry } from "@web/core/registry";
import { standardFieldProps } from "@web/views/fields/standard_field_props";
import { _lt } from "@web/core/l10n/translation";
import { Component, useState } from "@odoo/owl";

class PasswordEyesIconField extends Component {
  setup() {
    this.state = useState({
      isPasswordVisible: false,
      value: this.props.value || "",
    });
  }

  togglePasswordVisibility() {
    this.state.isPasswordVisible = !this.state.isPasswordVisible;
  }

  onChange(ev) {
    this.state.value = ev.target.value;
    this.props.update(this.state.value);
  }

  get inputType() {
    return this.state.isPasswordVisible ? "text" : "password";
  }

  get eyeIconClass() {
    return this.state.isPasswordVisible ? "fa fa-eye-slash" : "fa fa-eye";
  }
}

PasswordEyesIconField.template = "password_eyes_icon.PasswordEyesIconField";
PasswordEyesIconField.props = {
  ...standardFieldProps,
  placeholder: { type: String, optional: true },
};

PasswordEyesIconField.displayName = _lt("Password Field with Toggle");
PasswordEyesIconField.supportedTypes = ["char"];

registry.category("fields").add("password_eyes_icon", PasswordEyesIconField);
