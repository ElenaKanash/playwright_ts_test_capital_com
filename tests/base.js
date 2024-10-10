import { test as base } from "@playwright/test";
import UserRoles from "../pages/userRoles";

export const test = base.extend({
  unAutorizedUserRole: [
    async ({ page }, use) => {
      const userRole = new UserRoles(page);
      await userRole.unAutorizedUser();

      await use("")
    },
  { scope: "test" },
  ],

  autorizedUserRole: [
    async ({ page }, use) => {
      const userRole = new UserRoles(page);
      await userRole.autorizedUser();

      await use("")
    },
  { scope: "test" },
  ],
})



