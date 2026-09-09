# Royal Match GDD Wiki (static)

Site tĩnh sinh bởi `GameDesign/tools/gd_site.py` (chỉ dùng nội bộ). Mở `index.html` trực tiếp hoặc chạy `python -m http.server` trong thư mục này (trang Level cần HTTP để nạp `data/levels.tsv`).

## Publish lên GitHub Pages

```bash
git remote add origin <url-repo-cua-ban>
git push -u origin main
```

Trong repo: Settings → Pages → Source: "Deploy from a branch", Branch: `main`, Folder: `/ (root)` → Save. Không cần build; đã có `.nojekyll`. Mọi link là tương đối nên chạy được ở `https://<user>.github.io/<repo>/`.

Để cập nhật: sửa JSON trong `GameDesign/gdd` hoặc `GameDesign/site_meta`, chạy lại `python tools/gd_site.py`, rồi `git add -A && git commit && git push`.
