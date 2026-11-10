Add-Type -AssemblyName System.Drawing

function Draw-Mark {
  param(
    [System.Drawing.Graphics]$Graphics,
    [single]$CenterX,
    [single]$CenterY,
    [single]$Radius
  )

  $Graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $glowWidth = [single]([Math]::Max(6, $Radius * 0.14))
  $glow = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(80, 255, 255, 255)), $glowWidth
  $Graphics.DrawEllipse(
    $glow,
    ($CenterX - $Radius - $glowWidth),
    ($CenterY - $Radius - $glowWidth),
    (($Radius + $glowWidth) * 2),
    (($Radius + $glowWidth) * 2)
  )

  $disc = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 11, 16, 24))
  $Graphics.FillEllipse($disc, ($CenterX - $Radius), ($CenterY - $Radius), ($Radius * 2), ($Radius * 2))

  $ring = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(120, 215, 230, 245)), 2
  $inset = [single]4
  $Graphics.DrawEllipse(
    $ring,
    ($CenterX - $Radius + $inset),
    ($CenterY - $Radius + $inset),
    (($Radius - $inset) * 2),
    (($Radius - $inset) * 2)
  )

  $state = $Graphics.Save()
  $Graphics.TranslateTransform($CenterX, $CenterY)
  $Graphics.RotateTransform(-32)
  $orbitWidth = [single]([Math]::Max(1.4, $Radius * 0.03))
  $orbit = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(200, 185, 212, 234)), $orbitWidth
  $Graphics.DrawEllipse($orbit, (-$Radius * 0.72), (-$Radius * 0.26), ($Radius * 1.44), ($Radius * 0.52))
  $Graphics.Restore($state)

  $dot = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 126, 200, 255))
  $dotSize = [single]([Math]::Max(3, $Radius * 0.12))
  $Graphics.FillEllipse($dot, ($CenterX + $Radius * 0.38), ($CenterY - $Radius * 0.55), $dotSize, $dotSize)

  $stroke = [single]([Math]::Max(2, $Radius * 0.085))
  $metal = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(255, 244, 248, 252)), $stroke
  $metal.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $metal.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $left = $CenterX - $Radius * 0.28
  $Graphics.DrawLine($metal, $left, ($CenterY - $Radius * 0.5), $left, ($CenterY + $Radius * 0.5))
  $bowl = New-Object System.Drawing.Drawing2D.GraphicsPath
  $bowl.AddArc(
    ($left - $Radius * 0.02),
    ($CenterY - $Radius * 0.5),
    ($Radius * 0.78),
    ($Radius * 1.0),
    -90,
    180
  )
  $Graphics.DrawPath($metal, $bowl)
  $bowl.Dispose()

  $glow.Dispose()
  $disc.Dispose()
  $ring.Dispose()
  $orbit.Dispose()
  $dot.Dispose()
  $metal.Dispose()
}

$root = Split-Path -Parent $PSScriptRoot
$public = Join-Path $root "public"

function Save-Square {
  param([int]$Size, [string]$Name, [single]$RadiusRatio)
  $bitmap = New-Object System.Drawing.Bitmap $Size, $Size
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.Clear([System.Drawing.Color]::FromArgb(255, 2, 3, 7))
  Draw-Mark -Graphics $graphics -CenterX ($Size / 2) -CenterY ($Size / 2) -Radius ([single]($Size * $RadiusRatio))
  $bitmap.Save((Join-Path $public $Name), [System.Drawing.Imaging.ImageFormat]::Png)
  $graphics.Dispose()
  $bitmap.Dispose()
}

Save-Square -Size 64 -Name "favicon.png" -RadiusRatio 0.36
Save-Square -Size 180 -Name "apple-touch-icon.png" -RadiusRatio 0.34

$width = 1200
$height = 630
$og = New-Object System.Drawing.Bitmap $width, $height
$g = [System.Drawing.Graphics]::FromImage($og)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.Clear([System.Drawing.Color]::FromArgb(255, 2, 3, 7))
$sky = New-Object System.Drawing.Drawing2D.LinearGradientBrush (
  (New-Object System.Drawing.Rectangle 0, 0, $width, $height)
), ([System.Drawing.Color]::FromArgb(255, 7, 12, 24)), ([System.Drawing.Color]::FromArgb(255, 0, 0, 0)), 90
$g.FillRectangle($sky, 0, 0, $width, $height)
Draw-Mark -Graphics $g -CenterX 600 -CenterY 230 -Radius 118

$titleFont = New-Object System.Drawing.Font "Segoe UI", 46, ([System.Drawing.FontStyle]::Bold)
$roleFont = New-Object System.Drawing.Font "Segoe UI", 24, ([System.Drawing.FontStyle]::Regular)
$white = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
$muted = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(210, 220, 235, 250))
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Center
$g.DrawString("Dreamsaph", $titleFont, $white, (New-Object System.Drawing.RectangleF 0, 400, $width, 70), $format)
$g.DrawString("Software Engineer", $roleFont, $muted, (New-Object System.Drawing.RectangleF 0, 478, $width, 46), $format)
$og.Save((Join-Path $public "og.png"), [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$og.Dispose()
$sky.Dispose()
$titleFont.Dispose()
$roleFont.Dispose()
$white.Dispose()
$muted.Dispose()
$format.Dispose()

Write-Output "Assets written to $public"
