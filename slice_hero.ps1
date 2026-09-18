Add-Type -AssemblyName System.Drawing

$srcPath = 'C:\laces\public\assets\hero_sneaker_grid.png'
$srcBmp = [System.Drawing.Bitmap]::FromFile($srcPath)

$w = $srcBmp.Width
$h = $srcBmp.Height
Write-Output "Image size: ${w}x${h}"

# It is a 3x3 grid
$cellW = [int]($w / 3)
$cellH = [int]($h / 3)
Write-Output "Cell approx: ${cellW}x${cellH}"

$outDir = 'C:\laces\public\assets\hero_grid'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$colBounds = @(
    @{ StartX = 1; Width = 227 },
    @{ StartX = 230; Width = 227 },
    @{ StartX = 459; Width = 227 }
)

$rowBounds = @(
    @{ StartY = 1; Height = 338 },
    @{ StartY = 341; Height = 340 },
    @{ StartY = 684; Height = 338 }
)

$idx = 1
for ($r = 0; $r -lt 3; $r++) {
    for ($c = 0; $c -lt 3; $c++) {
        $cropX = $colBounds[$c].StartX
        $cropY = $rowBounds[$r].StartY
        $cropW = $colBounds[$c].Width
        $cropH = $rowBounds[$r].Height

        $destBmp = new-object System.Drawing.Bitmap $cropW, $cropH
        $g = [System.Drawing.Graphics]::FromImage($destBmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

        $srcRect = new-object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
        $destRect = new-object System.Drawing.Rectangle 0, 0, $cropW, $cropH

        $g.DrawImage($srcBmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
        $g.Dispose()

        $outFilePath = Join-Path $outDir "cell_${r}_${c}.png"
        $destBmp.Save($outFilePath, [System.Drawing.Imaging.ImageFormat]::Png)
        $destBmp.Dispose()

        $idx++
    }
}

$srcBmp.Dispose()
Write-Output "Cleanly sliced 9 boundary-free cells into $outDir"
