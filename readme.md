# LC-PE Dataform

Run order:
1) Raw DTS at 10:00 (outside Dataform).
2) Stage models 10:10–10:20.
3) Dims + bridges 10:25.
4) Facts 10:35.
5) Marts views 10:45.

Deploy:
- Import this repo into BigQuery Dataform.
- Create a prod environment pointing to project `lc-pe-prod`, dataset prefix `stage`.
- Add schedules per the run order.

Conventions:
- All models live in `definitions/`.
- Use `ref("model_name")` for dependencies.
- External tables (already in BigQuery) are declared in `definitions/sources.sqlx`.