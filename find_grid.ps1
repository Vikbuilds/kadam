Add-Type -AssemblyName System.Drawing
$b = [System.Drawing.Bitmap]::FromFile('C:\laces\public\assets\hero_sneaker_grid.png')

Write-Host "Width: $($b.Width), Height: $($b.Height)"

# Find dark vertical lines near 1/3 and 2/3
for ($x = 220; $x -le 235; $x++) {
    for ($y = 10; $y -le 300; $y += 50) {
        $c = $b.GetPixel($x, $y)
        if ($c.R -lt 120 -and $c.G -lt 120 -and $c.B -lt 120) {
            Write-Host "Vertical line 1 around x = $x at y = $y (R=$($c.R), G=$($c.G), B=$($c.B))"
            break
        }
    }
}
for ($x = 450; $x -le 465; $x++) {
    for ($y = 10; $y -le 300; $y += 50) {
        $c = $b.GetPixel($x, $y)
        if ($c.R -lt 120 -and $c.G -lt 120 -and $c.B -lt 120) {
            Write-Host "Vertical line 2 around x = $x at y = $y (R=$($c.R), G=$($c.G), B=$($c.B))"
            break
        }
    }
}

# Find dark horizontal lines near 1/3 and 2/3
for ($y = 330; $y -le 350; $y++) {
    $c = $b.GetPixel(50, $y)
    if ($c.R -lt 100 -and $c.G -lt 100 -and $c.B -lt 100) {
        Write-Host "Horizontal line 1 around y = $y (R=$($c.R), G=$($c.G), B=$($c.B))"
    }
}
for ($y = 670; $y -le 690; $y++) {
    $c = $b.GetPixel(50, $y)
    if ($c.R -lt 100 -and $c.G -lt 100 -and $c.B -lt 100) {
        Write-Host "Horizontal line 2 around y = $y (R=$($c.R), G=$($c.G), B=$($c.B))"
    }
}

$b.Dispose()
