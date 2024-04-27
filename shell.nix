{ pkgs ? import <nixpkgs> {} }:

with pkgs;

mkShell {
    buildInputs = [
        pkgs.rustup
        darwin.apple_sdk.frameworks.WebKit
        libiconv
    ];
}
