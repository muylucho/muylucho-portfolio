#!/bin/bash

echo ""
echo "================================"
echo "MUYLUCHO PORTFOLIO - GitHub Upload"
echo "================================"
echo ""

# Get the directory where the script is located
cd "$(dirname "$0")"

echo "Inicializando repositorio git..."
git init

echo "Configurando usuario..."
git config user.name "Luciano Campanelli"
git config user.email "muylucho@gmail.com"

echo "Agregando archivos..."
git add .

echo "Creando primer commit..."
git commit -m "Initial commit: Muylucho portfolio - Diego & Facha style"

echo "Renombrando rama a main..."
git branch -M main

echo "Conectando con GitHub..."
git remote add origin https://github.com/muylucho/muylucho-portfolio.git

echo ""
echo "================================"
echo "IMPORTANTE - LEE ESTO:"
echo "================================"
echo ""
echo "Ahora necesitas autenticarte en GitHub."
echo "Se abrirá una ventana del navegador."
echo ""
echo "1. Inicia sesión en GitHub (si no estás logeado)"
echo "2. Autoriza a Git Credential Manager"
echo "3. Presiona Enter para continuar"
echo ""
read -p "Presiona Enter para continuar..."

echo "Subiendo código a GitHub..."
git push -u origin main

echo ""
echo "================================"
echo "¡LISTO!"
echo "================================"
echo ""
echo "Tu código está en:"
echo "https://github.com/muylucho/muylucho-portfolio"
echo ""
echo "Próximo paso:"
echo "1. Ve a vercel.com"
echo "2. Conecta tu GitHub"
echo "3. Selecciona muylucho-portfolio"
echo "4. ¡Deploy automático!"
echo ""
