import {
  ERROR,
  ErrorCodes,
  HTTPErrorCodes,
  ORG_CREATED,
  HTTPSuccessCodes,
  internalServerError,
  unauthorizedError,
} from "@fluctux/httpcodesanevents";

import { Org } from "@/models/org";
import { ApiResponse, ApiError } from "@fluctux/httpcodesanevents";
import { createOrgZodSchema, getFormattedZodErrors } from "@fluctux/zod";
import { User as UserSessionType } from "next-auth";
import { CreateOrganizationDataType, OrgResponseType } from "@fluctux/types";
import { connDb } from "@/db/db.conn";

export class Organization {
  protected session: UserSessionType | null = null;

  constructor(session: UserSessionType | null) {
    this.session = session;
  }

  async createNewOrg(
    data: CreateOrganizationDataType
  ): Promise<OrgResponseType> {
    try {
      // TODO: uncomment
      if (!this.session) {
        return unauthorizedError();
      }

      const sanitizedData = createOrgZodSchema.safeParse(data);

      if (!sanitizedData.success) {
        const error = sanitizedData.error.format();
        const zodErrors = getFormattedZodErrors(error);
        return {
          error: JSON.parse(
            JSON.stringify(
              new ApiError(
                HTTPErrorCodes.NOT_ACCEPTABLE,
                ErrorCodes.NOT_ACCEPTABLE,
                false,
                "",
                [ERROR.NOT_ACCEPTABLE, zodErrors]
              )
            )
          ),
        };
      }

      await connDb();

      const isOrgExisted = await Org.findOne({ org_slug: data.org_slug });

      if (isOrgExisted) {
        return {
          error: JSON.parse(
            JSON.stringify(
              new ApiError(
                HTTPErrorCodes.BAD_REQUEST,
                ErrorCodes.INVALID_REQUEST,
                false,
                "",
                [ERROR.INVALID_REQUEST]
              )
            )
          ),
        };
      }

      const newOrg = new Org({
        ...data,
        admin: (this.session && this.session._id) || "66d61f647fadea5bd3aec0c2",
      });

      await newOrg.save();

      return {
        message: JSON.parse(
          JSON.stringify(
            new ApiResponse(
              HTTPSuccessCodes.CREATED,
              ORG_CREATED,
              {
                _id: newOrg._id,
              },
              true
            )
          )
        ),
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return internalServerError();
    }
  }
}
