# SEO i Google Search Console - Uputstvo

## ✅ Šta je urađeno:

### 1. Sitemap.xml
- ✅ Kreiran dinamički sitemap na `/sitemap.xml`
- ✅ Uključuje sve stranice sajta (glavna i kontakt)
- ✅ Automatski se ažurira sa datumom poslednje izmene

### 2. Robots.txt
- ✅ Kreiran robots.txt na `/robots.txt`
- ✅ Dozvoljava indeksiranje svim botovima
- ✅ Blokira `/api/` i `/_next/` foldere
- ✅ Ukazuje na sitemap lokaciju

### 3. Meta tagovi
- ✅ Open Graph meta tagovi za društvene mreže
- ✅ Twitter Card meta tagovi
- ✅ Strukturirani podaci (JSON-LD) za LocalBusiness
- ✅ SEO optimizovani title i description
- ✅ Keywords za svaku stranicu
- ✅ Canonical URLs
- ✅ Google Search Console verification meta tag

### 4. Strukturirani podaci (Schema.org)
- ✅ LocalBusiness schema sa svim podacima
- ✅ Informacije o lokaciji (Beograd)
- ✅ Radno vreme (24/7)
- ✅ Kontakt informacije
- ✅ Tip usluga

---

## 🚀 Koraci za Google Search Console

### Korak 1: Verifikacija sajta
Već imate verification fajl: `/public/google433d4468ee166612.html`

1. Idite na [Google Search Console](https://search.google.com/search-console)
2. Kliknite na "Add property"
3. Unesite: `https://www.vodoinstalatermvm.rs`
4. Izaberite metod verifikacije "HTML file"
5. Fajl je već postavljen, kliknite "Verify"

**ALTERNATIVNO** (ako ne radi HTML fajl):
- Možete koristiti HTML tag metod
- Već imate meta tag u `layout.tsx`: `google433d4468ee166612`

### Korak 2: Dodavanje Sitemap-a
Nakon verifikacije:

1. U Google Search Console, u levom meniju kliknite "Sitemaps"
2. Unesite: `sitemap.xml`
3. Kliknite "Submit"

Google će sada automatski indeksirati sve stranice sa sitemap-a.

### Korak 3: Provera indeksiranja
1. Sačekajte 24-48 sati
2. Idite na "URL Inspection" u GSC
3. Testiranje URL-ova:
   - `https://www.vodoinstalatermvm.rs/`
   - `https://www.vodoinstalatermvm.rs/kontakt`

### Korak 4: Request Indexing (Opciono - za brže indeksiranje)
1. U "URL Inspection" unesite URL
2. Kliknite "Request Indexing"
3. Ponovite za sve stranice

---

## 📊 Testiranje SEO-a

### Online alati za testiranje:
1. **Rich Results Test**: https://search.google.com/test/rich-results
   - Testirajte strukturirane podatke

2. **PageSpeed Insights**: https://pagespeed.web.dev/
   - Testirajte brzinu sajta

3. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
   - Proverite mobilnu kompatibilnost

4. **Open Graph Debugger**: https://www.opengraph.xyz/
   - Testirajte kako izgleda na društvenim mrežama

### Lokalno testiranje:
Nakon pokretanja sajta (`npm run dev` ili `npm run build && npm start`):
- Sitemap: http://localhost:3000/sitemap.xml
- Robots: http://localhost:3000/robots.txt

---

## 🔍 Provera posle deploy-a

Nakon što deployjujete sajt na production:

1. **Proverite da li su fajlovi dostupni:**
   - https://www.vodoinstalatermvm.rs/sitemap.xml
   - https://www.vodoinstalatermvm.rs/robots.txt

2. **Testirajte strukturirane podatke:**
   ```bash
   curl https://www.vodoinstalatermvm.rs/ | grep "application/ld+json"
   ```

3. **Proverite meta tagove:**
   - View Page Source u browseru
   - Potražite Open Graph tagove (`og:title`, `og:description`, itd.)

---

## 📈 Dodatni SEO saveti

### 1. Google Analytics (opciono)
Dodajte Google Analytics za praćenje posetilaca:
- Registrujte se na https://analytics.google.com/
- Dodajte tracking kod u `layout.tsx`

### 2. Google Business Profile
- Napravite Google Business profil za lokalni SEO
- Povežite sa vašim sajtom
- Dodajte fotografije, radno vreme, usluge

### 3. Content optimizacija
- Redovno ažurirajte sadržaj
- Dodajte blog sekciju (opciono)
- Koristite ključne reči prirodno u tekstu

### 4. Backlinks
- Registrujte se na lokalne direktorijume
- Tražite saradnju sa lokalnim sajtovima
- Postavite link na društvenim mrežama

---

## 🛠️ Maintenance

Sve je sada automatizovano:
- Sitemap se automatski ažurira
- Meta tagovi su optimizovani
- Strukturirani podaci su dodati
- Robots.txt je konfigurisan

**Kada dodate novu stranicu:**
1. Dodajte je u `app/sitemap.ts` fajl
2. Dodajte metadata u page layout
3. Google će automatski pronaći preko sitemap-a

---

## ❓ Česta pitanja

**Q: Koliko traje dok Google ne indeksira sajt?**
A: Obično 24-48 sati, ali može trajati i do 2 nedelje.

**Q: Šta ako moj sajt nije indeksiran?**
A: Proverite:
- Da li je sajt verifikovan u GSC
- Da li je sitemap poslat
- Da li postoje greške u GSC
- Da li robots.txt dozvoljava indeksiranje

**Q: Kako da proverim da li je sajt indeksiran?**
A: U Google pretraživaču unesite: `site:vodoinstalatermvm.rs`

**Q: Mogu li da ažuriram sitemap ručno?**
A: Ne morate - automatski se generiše pri svakom build-u

---

## 📞 Dodatna pomoć

Ako nešto ne radi ili imate pitanja, proverite:
- Google Search Console Help Center
- Next.js dokumentaciju za sitemap i robots
- Schema.org dokumentaciju za strukturirane podatke

**Važne URLs:**
- Google Search Console: https://search.google.com/search-console
- Schema.org: https://schema.org/
- Next.js Metadata: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
