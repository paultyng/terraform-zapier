terraform {
  backend "remote" {
    organization = "paultyng"

    workspaces {
      name = "test-workspace"
    }
  }
}

variable "test1" {
}

output "test1" {
    value = var.test1
}
