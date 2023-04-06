import { expect, test } from "@playwright/test";

test.describe("Récupération des tags d'un utilisateur", () => {
  // Annotate inter-dependent tests as serial.
  // If one of the serial tests fails, all subsequent tests are skipped.
  test.describe.configure({ mode: "serial" });

  const codesite: string = "of";
  const mail: string = "no-reply@ouest-france.fr";
  let last_update: string = "0";
  
  test("Site inconnu", async ({ request }) => {
    const tags = await request.get(`/user/ofr/${mail}`);
    expect(tags.status()).toBe(403);
  });

  test("Utilisateur inconnu", async ({ request }) => {
    const tags = await request.get(`/user/${codesite}/toto@ouest-france.fr`);
    expect(tags.status()).toBe(404);
  });
    test("Premier appel", async ({ request }) => {
    const tags = await request.get(`/user/${codesite}/${mail}/${last_update}`);
    expect(tags.ok()).toBeTruthy();
    expect(tags.status()).toBe(200);

    last_update = (await tags.json()).date;
  });

  test("Appel suivant", async ({ request }) => {
    const tags = await request.get(`/user/${codesite}/${mail}/${last_update}`);
    expect(tags.status()).toBe(304);
  });

});
