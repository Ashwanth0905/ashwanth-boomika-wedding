Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bmp = New-Object System.Drawing.Bitmap $width, $height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Background: Cream & Ivory
$bgRect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(253, 251, 247))
$g.FillRectangle($bgBrush, $bgRect)

# Outer and Inner Antique Gold Borders
$goldPen1 = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(197, 155, 39), 8)
$g.DrawRectangle($goldPen1, 25, 25, $width - 50, $height - 50)

$goldPen2 = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(212, 175, 55), 2)
$goldPen2.DashStyle = [System.Drawing.Drawing2D.DashStyle]::Dash
$g.DrawRectangle($goldPen2, 38, 38, $width - 76, $height - 76)

# Fonts
$fontGanesha = New-Object System.Drawing.Font('Georgia', 16, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font('Georgia', 14, [System.Drawing.FontStyle]::Regular)
$fontEvent = New-Object System.Drawing.Font('Georgia', 20, [System.Drawing.FontStyle]::Bold)
$fontNames = New-Object System.Drawing.Font('Georgia', 38, [System.Drawing.FontStyle]::Bold)
$fontAmp = New-Object System.Drawing.Font('Georgia', 30, [System.Drawing.FontStyle]::Italic)
$fontDetails = New-Object System.Drawing.Font('Georgia', 18, [System.Drawing.FontStyle]::Bold)
$fontQuote = New-Object System.Drawing.Font('Georgia', 14, [System.Drawing.FontStyle]::Italic)

# Brushes
$goldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(184, 134, 11))
$greenBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(12, 56, 33))
$darkGreenBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(7, 36, 21))
$mutedBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(85, 95, 85))

# Centered String format
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center

# Texts
$g.DrawString('|| OM SHRI GANESHAYA NAMAHA ||', $fontGanesha, $goldBrush, ($width / 2), 70, $sf)
$g.DrawString('WITH GREAT JOY, WE CORDIALLY INVITE YOU TO THE', $fontSub, $mutedBrush, ($width / 2), 115, $sf)

# Event Pill Box
$pillRect = New-Object System.Drawing.Rectangle (($width / 2) - 200), 145, 400, 48
$pillBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(12, 56, 33))
$g.FillRectangle($pillBrush, $pillRect)
$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 230, 180))
$g.DrawString('WEDDING RECEPTION', $fontEvent, $whiteBrush, ($width / 2), 169, $sf)

# Couple Names
$g.DrawString('V.N. ASHWANTH', $fontNames, $greenBrush, ($width / 2), 245, $sf)
$g.DrawString('&', $fontAmp, $goldBrush, ($width / 2), 298, $sf)
$g.DrawString('N. BOOMIKA', $fontNames, $greenBrush, ($width / 2), 350, $sf)

# Divider line
$linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(197, 155, 39), 2)
$g.DrawLine($linePen, 350, 395, 850, 395)

# Date & Time Banner
$g.DrawString('SATURDAY, 12 DECEMBER 2026  |  5:30 PM - 9:00 PM', $fontDetails, $darkGreenBrush, ($width / 2), 430, $sf)

# Venue
$venueFont = New-Object System.Drawing.Font('Georgia', 20, [System.Drawing.FontStyle]::Bold)
$g.DrawString('PSK MAHAL  •  Pattlur Nall Road', $venueFont, $goldBrush, ($width / 2), 475, $sf)

# Quote
$g.DrawString('"With great joy, we invite you to join us as we celebrate this beautiful occasion."', $fontQuote, $mutedBrush, ($width / 2), 535, $sf)

if (!(Test-Path 'public')) {
    New-Item -ItemType Directory -Path 'public'
}

$bmp.Save('public/og-image.png', [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
Write-Output "OG Image saved at public/og-image.png"
