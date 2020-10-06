resource "google_project" "default" {
  provider = google-beta

  project_id = "tf-test%{random_suffix}"
  name       = "tf-test%{random_suffix}"
  org_id     = "123456789"
}

resource "google_firebase_project" "default" {
  provider = google-beta
  project  = google_project.default.project_id
}
