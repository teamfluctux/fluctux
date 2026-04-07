import { Field, FieldGroup, FieldLabel, FxInput } from "@fluctux/ui";
import React from "react";

export const SSlCommerzSetup = () => {
  return (
    <div className="w-full">
      <FieldGroup>
        {/* Store Id */}
        <Field>
          <FieldLabel htmlFor="store_id">
            Store Id <span className="text-destructive">*</span>
          </FieldLabel>
          <FxInput
            id="store_id"
            variant="blackPrimary"
            placeholder="demoa69cfc35281082"
            className="w-full"
            size="md"
          />
        </Field>
        {/* Store Password */}
        <Field>
          <FieldLabel htmlFor="store_passwd">
            Store Password <span className="text-destructive">*</span>
          </FieldLabel>
          <FxInput
            id="store_passwd"
            variant="blackPrimary"
            placeholder="demoa69cfc35281082@ssl"
            className="w-full"
            size="md"
          />
        </Field>

        {/* Success URL */}
        <Field>
          <FieldLabel htmlFor="success_url">
            Success URL <span className="text-destructive">*</span>
          </FieldLabel>
          <FxInput
            id="success_url"
            variant="blackPrimary"
            placeholder="https://yourstore.com/payment/success"
            className="w-full"
            size="md"
            required
          />
        </Field>

        {/* Fail URL */}
        <Field>
          <FieldLabel htmlFor="fail_url">
            Fail URL <span className="text-destructive">*</span>
          </FieldLabel>
          <FxInput
            id="fail_url"
            variant="blackPrimary"
            placeholder="https://yourstore.com/payment/fail"
            className="w-full"
            size="md"
            required
          />
        </Field>

        {/* Cancel URL */}
        <Field>
          <FieldLabel htmlFor="cancel_url">
            Cancel URL <span className="text-destructive">*</span>
          </FieldLabel>
          <FxInput
            id="cancel_url"
            variant="blackPrimary"
            placeholder="https://yourstore.com/payment/cancel"
            className="w-full"
            size="md"
            required
          />
        </Field>

        {/* IPN URL */}
        <Field>
          <FieldLabel htmlFor="ipn_url">
            IPN URL <span className="text-destructive">*</span>
          </FieldLabel>
          <FxInput
            id="ipn_url"
            variant="blackPrimary"
            placeholder="https://yourstore.com/api/payment/ipn"
            className="w-full"
            size="md"
            required
          />
        </Field>
      </FieldGroup>
    </div>
  );
};
