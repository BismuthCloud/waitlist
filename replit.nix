{ pkgs }: {
  permittedInsecurePackages = [
    "openssl-1.1.1w"
  ];
  deps = [
    pkgs.openssl_1_1
    # Add other dependencies as needed
  ];
}