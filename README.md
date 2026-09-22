# Kişisel Website — Berke Göktuğ Sarılı

Sade HTML/CSS/JS ile yazılmış kişisel site (CV + portföy + blog). Hiçbir bağımlılık, build adımı
veya framework yok — dosyaları olduğu gibi herhangi bir statik sunucuya koymak yeterli.

## Yapı

```
index.html                          Ana sayfa (hakkımda, deneyim, projeler, otomasyon, yetenekler, iletişim)
blog/index.html                     Blog listesi
blog/route-optimization-platform.html   İlk yazı
css/style.css                       Tüm stiller (açık/koyu tema)
js/main.js                          Tema düğmesi, mobil menü, scroll animasyonları
```

## Lokalde görüntüleme

`index.html` dosyasına çift tıklaman yeterli (sunucu gerekmez).

## Yayın adresi

**https://berkegoktugsarili.github.io** (GitHub kullanıcısı: `berkegoktugsarili`)

Depo git ile hazırlandı (bu klasör `git init` + commit edilmiş). Yayın için repo adı
**`berkegoktugsarili.github.io`** olmalı (kullanıcı-sitesi → kök adres, Pages otomatik açılır).

### Yol 1 — gh CLI ile (kurulduysa, tek komut zinciri)
```powershell
cd "C:\Users\berke.sarili\Desktop\kendi uygulamalarım\KISISEL-SITE"
gh auth login                       # tek sefer, tarayıcı ile giriş
gh repo create berkegoktugsarili/berkegoktugsarili.github.io --public --source=. --push
```
Kullanıcı-sitesinde (`kullanici.github.io`) Pages otomatik main koluyla yayına girer; birkaç dakikada canlı.

### Yol 2 — sadece git (gh yoksa)
GitHub'da elle `berkegoktugsarili.github.io` adında **public** repo aç, sonra:
```powershell
cd "C:\Users\berke.sarili\Desktop\kendi uygulamalarım\KISISEL-SITE"
git remote add origin https://github.com/berkegoktugsarili/berkegoktugsarili.github.io.git
git push -u origin main
```
Sonraki güncellemeler: `git add -A; git commit -m "..."; git push`.

## SEO (eklendi)
- `index.html`: canonical + Open Graph + Twitter Card + JSON-LD (Person) → LinkedIn/Google paylaşımlarında `og.png` önizlemesi çıkar.
- `og.png` (1200×630), `sitemap.xml`, `robots.txt` hazır.

## İsteğe bağlı yapılacaklar
- [ ] Proje kartlarındaki SVG mockup'ları gerçek ekran görüntüleriyle değiştir (`img/` + `<img>`).
- [ ] Türkçe sürüm (şu an İngilizce).
- [ ] Kendi alan adın (`berkesarili.com`) → repo köküne `CNAME` + DNS kayıtları.

## Notlar

- Telefon numarası bilerek siteye **konmadı** (herkese açık sitede spam riski); sadece e-posta var.
- Site tamamen statik olduğu için tarayıcıdaki tema tercihi `localStorage`'da saklanır.
