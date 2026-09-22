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

## GitHub Pages'te yayınlama (ücretsiz)

1. [github.com](https://github.com) hesabınla giriş yap → **New repository**.
   - Repo adını **`KULLANICIADIN.github.io`** yaparsan site doğrudan `https://KULLANICIADIN.github.io`
     adresinde yayınlanır (önerilen). Farklı bir ad verirsen adres
     `https://KULLANICIADIN.github.io/repo-adi` olur.
2. Dosyaları yükle — iki yol var:
   - **Git olmadan (en kolay):** Repo sayfasında **"uploading an existing file"** linkine tıkla,
     bu klasördeki TÜM dosya ve klasörleri pencereye sürükle-bırak → Commit. (Bu bilgisayarda git
     kurulu değil; bu yöntem için gerekmiyor da.)
   - **Git ile:** Önce `winget install Git.Git` ile git kur, sonra bu klasörde:
     ```powershell
     git init -b main; git add -A; git commit -m "ilk surum"
     git remote add origin https://github.com/KULLANICIADIN/KULLANICIADIN.github.io.git
     git push -u origin main
     ```
3. GitHub'da repo → **Settings → Pages** → "Deploy from a branch" → Branch: **main**, klasör: **/ (root)** → Save.
4. 1-2 dakika içinde site yayında. Sonraki değişikliklerde aynı yoldan dosyayı tekrar yüklemen
   (veya git ile push etmen) yeterli.

## Yapılacaklar / kişiselleştirme

- [ ] `index.html` içindeki iletişim bölümünde yorum satırına alınmış **LinkedIn / GitHub** linklerini
      kendi profillerinle açıp doldur.
- [ ] İstersen proje kartlarındaki SVG illüstrasyonları gerçek ekran görüntüleriyle değiştir
      (görselleri `img/` klasörüne koy, `<div class="proj-art">` içindeki `<svg>` yerine `<img>` koy).
- [ ] Yeni blog yazısı eklemek için: `blog/route-optimization-platform.html` dosyasını kopyala,
      içeriği değiştir, `blog/index.html` ve ana sayfadaki listeye kart ekle.
- [ ] Kendi alan adın olursa (örn. `berkesarili.com`): repo köküne içinde alan adı yazan `CNAME`
      dosyası ekle + alan adı sağlayıcında GitHub Pages DNS kayıtlarını gir.

## Notlar

- Telefon numarası bilerek siteye **konmadı** (herkese açık sitede spam riski); sadece e-posta var.
- Site tamamen statik olduğu için tarayıcıdaki tema tercihi `localStorage`'da saklanır.
