exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("stories").insert([
    {
      source:
        "https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed",
      title: "Qais and Daewood",
      story:
        "Qais and Daewood are now running a sewing business in Oinofyta refugee camp. They hope to be granted asylum in Greece so that they can raise their families in safety."
    },
    {
      source:
        "https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed",
      title: "Noorkin and Yacob",
      story:
        "Back in Myanmar my father was a farmer and he also went fishing. Along with my siblings, I used to attend school regularly. I was in Grade 2 when we left. We used to learn Burmese literature in school. But it all came to an end the day our house got burnt. The houses in our village was on fire. We couldn’t run to the jungle because it was on fire too. We flee to another village but that village was also attacked. We were stranded so we fled again to a canal and stayed there for two days with no food. We made it across the border and now we live here in the camps."
    }
  ]);
}  