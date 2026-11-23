Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bmp = New-Object System.Drawing.Bitmap $width, $height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Background: Cream & Ivory
$bgRect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(253, 251, 247))
$g.FillRectangle($bgBrush, $bgRect)

# Outer and Inner Antique Gold Borders
$goldPen1 = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(197, 155, 39), 8)
$g.DrawRectangle($goldPen1, 20, 20, $width - 40, $height - 40)

$goldPen2 = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(212, 175, 55), 2)
$goldPen2.DashStyle = [System.Drawing.Drawing2D.DashStyle]::Dash
$g.DrawRectangle($goldPen2, 32, 32, $width - 64, $height - 64)

# Couple Photo on Left Side (with Arch / Rounded Rectangle)
$photoPath = 'public/images/couple-heart.jpg'
if (Test-Path $photoPath) {
    $img = [System.Drawing.Image]::FromFile($photoPath)
    
    # Target frame for photo: X=50, Y=50, Width=400, Height=530
    $photoRect = New-Object System.Drawing.Rectangle(55, 55, 410, 520)
    
    # Draw photo frame background & shadow
    $photoBorderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(197, 155, 39), 4)
    $g.DrawImage($img, $photoRect)
    $g.DrawRectangle($photoBorderPen, $photoRect)
    
    $img.Dispose()
}

# Right Side Content: X start around 500, Center around 830
$centerX = 830

# Fonts
$fontGanesha = New-Object System.Drawing.Font('Georgia', 14, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font('Georgia', 12, [System.Drawing.FontStyle]::Regular)
$fontEvent = New-Object System.Drawing.Font('Georgia', 16, [System.Drawing.FontStyle]::Bold)
$fontNames = New-Object System.Drawing.Font('Georgia', 32, [System.Drawing.FontStyle]::Bold)
$fontAmp = New-Object System.Drawing.Font('Georgia', 26, [System.Drawing.FontStyle]::Italic)
$fontDetails = New-Object System.Drawing.Font('Georgia', 16, [System.Drawing.FontStyle]::Bold)
$fontQuote = New-Object System.Drawing.Font('Georgia', 13, [System.Drawing.FontStyle]::Italic)

# Brushes
$goldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(184, 134, 11))
$greenBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(12, 56, 33))
$darkGreenBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(7, 36, 21))
$mutedBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(85, 95, 85))

# Centered String format
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center

# Right side texts
$g.DrawString('|| OM SHRI GANESHAYA NAMAHA ||', $fontGanesha, $goldBrush, $centerX, 70, $sf)
$g.DrawString('CORDIALLY INVITES YOU TO CELEBRATE THE', $fontSub, $mutedBrush, $centerX, 115, $sf)

# Event Pill Box
$pillRect = New-Object System.Drawing.Rectangle(($centerX - 170), 145, 340, 44)
$pillBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(12, 56, 33))
$g.FillRectangle($pillBrush, $pillRect)
$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 230, 180))
$g.DrawString('WEDDING RECEPTION', $fontEvent, $whiteBrush, $centerX, 167, $sf)

# Couple Names
$g.DrawString('V.N. ASHWANTH', $fontNames, $greenBrush, $centerX, 235, $sf)
$g.DrawString('&', $fontAmp, $goldBrush, $centerX, 285, $sf)
$g.DrawString('N. BOOMIKA', $fontNames, $greenBrush, $centerX, 335, $sf)

# Divider line
$linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(197, 155, 39), 2)
$g.DrawLine($linePen, ($centerX - 240), 385, ($centerX + 240), 385)

# Date & Time Banner
$g.DrawString('SATURDAY, 12 DECEMBER 2026', $fontDetails, $darkGreenBrush, $centerX, 420, $sf)
$fontTime = New-Object System.Drawing.Font('Georgia', 14, [System.Drawing.FontStyle]::Bold)
$g.DrawString('5:30 PM - 9:00 PM IST', $fontTime, $goldBrush, $centerX, 452, $sf)

# Venue
$venueFont = New-Object System.Drawing.Font('Georgia', 17, [System.Drawing.FontStyle]::Bold)
$g.DrawString('PSK MAHAL  •  Pattlur Nall Road', $venueFont, $darkGreenBrush, $centerX, 492, $sf)

# Quote
$g.DrawString('"With great joy, we invite you to join us as we celebrate."', $fontQuote, $mutedBrush, $centerX, 545, $sf)

$bmp.Save('public/og-image.png', [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
Write-Output "OG Image updated with authentic couple photo at public/og-image.png"
