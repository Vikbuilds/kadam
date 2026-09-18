Add-Type -AssemblyName System.Drawing

$srcPath = 'C:\Users\Vikas Acharya\.gemini\antigravity-ide\brain\96709edc-cfdc-47a7-a9c2-7bccab980dee\.user_uploaded\media_1789752464529.png'
$outDir = 'C:\laces\public\assets\goat'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$srcBmp = [System.Drawing.Bitmap]::FromFile($srcPath)

# Grid bounds in the 541 x 1024 screenshot
$gridLeft = 24
$gridTop = 208
$cellW = 123
$cellH = 136

$index = 1
for ($row = 0; $row -lt 5; $row++) {
    for ($col = 0; $col -lt 4; $col++) {
        # Sneaker is in upper ~95px of each cell
        $cropX = $gridLeft + ($col * $cellW) + 6
        $cropY = $gridTop + ($row * $cellH) + 14
        $cropW = $cellW - 12
        $cropH = 92

        $destBmp = new-object System.Drawing.Bitmap $cropW, $cropH
        $g = [System.Drawing.Graphics]::FromImage($destBmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.Clear([System.Drawing.Color]::White)

        $srcRect = new-object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
        $destRect = new-object System.Drawing.Rectangle 0, 0, $cropW, $cropH

        $g.DrawImage($srcBmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
        $g.Dispose()

        $outFilePath = Join-Path $outDir "shoe_$index.png"
        $destBmp.Save($outFilePath, [System.Drawing.Imaging.ImageFormat]::Png)
        $destBmp.Dispose()

        $index++
    }
}

$srcBmp.Dispose()
Write-Output "Successfully cropped 20 sneakers to $outDir"
