now i have to set up my homepage for my portfolio.

at the moment i think i will add these sections :

1 hero section : 
  - an h1 with my name
  - an h2 with a brief description like "full-stack developer..."
  - an image of myself

2 projects section:
  - a list of my main three projects each with a title, description of the project, technologies 
    used in the project and a link to the live project for example to my jade lili project => jade-lily.vercel.app

3 about me section:
  - a title
  - a subtitle
  - a description
  - a list of my skills
  - a link to my resume

4 contacts section :
  - a title like "get in touch" or something similar
  - a little description(optional)
  - my contact info like a mail icons to sen me an email;

here :

<div className="bg-white dark:bg-slate-700 rounded-2xl p-4 lg:p-6 ring-1 ring-slate-200 dark:ring-slate-700">
              <h3 className=" font-semibold text-slate-900 dark:text-slate-100">{t("pages.resume.languagesTitle")}</h3>
              <ul className="mt-3 text-sm text-slate-700 dark:text-slate-200 list-disc pl-5">
                <li className="flex flex-col gap-3 mb-4">
                  {t("pages.resume.languageEnglish")}
                 <CertificatesList certificates={langCertificates} />
                </li>
                <li>{t("pages.resume.languageItalian")}</li>
              </ul>
            </div>


how can i add the dot or other symbol for each li item ?

what symbols i can add with tailwind ?










