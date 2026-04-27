import z from "zod/v4"
class ScraperZodValidation {
    ScraperConfig = z.object({
        numberOfProducts: z.coerce.number({error: "Enter a valid number"}).int({error: "Number of products cannot contains decimals"}).min(1, { error: "Enter at least 1 product to scrape!" }),
        whatToDoWithScrapProducts: z.string().nonempty({ error: "Please select what to do with scraped products!" }),
        apiUrl: z.string().nonempty({error: "Please select a scraper!"}),
    })
}

export const scraperZodValidation = new ScraperZodValidation()

export type ScraperConfigType = z.infer<ScraperZodValidation["ScraperConfig"]>