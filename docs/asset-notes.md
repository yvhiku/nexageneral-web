# Nexa mascot asset preparation

Built-in image_gen tool, background-extraction edits. No CLI or programmatic image editing used.

Inputs: /Users/apple/Downloads/nexa{stays,go,pay,fresh,market,jobs}pose.png

Final assets: five transparent PNGs (Stays, Go, Pay, Fresh, Jobs). Market used white background fallback after alpha extraction failures. All outputs visually inspected against supplied originals for identities, colors, poses and props; exact pixel equality is not guaranteed by generative edits. Minor edge speckling may appear at high magnification.

Initial prompt per mascot: Use case: background-extraction. Asset type: transparent website mascot PNG. Image 1 is the sole EDIT TARGET. Remove ONLY the baked-in gray-and-white checkerboard backdrop from this existing artwork, including background holes and narrow gaps between limbs and props. Return a genuinely transparent alpha-channel PNG, no painted checkerboard, no white or gray canvas. Preserve the EXACT original mascot artwork. Preserve exact colors, facial shape, pose, proportions, outlines, highlights, shadows within artwork, logos, letters and props. Do not reinterpret, redraw, restyle or change the design. Retain the supplied 2D illustrated style. Preserve detached motion/accent marks. Maintain full subject uncropped with tiny transparent edge margin. No added shadow, platform, text or objects.

Final Stays/Jobs extraction prompt: Remove the background from this image. Make it a transparent PNG cutout with actual alpha transparency. Keep the mascot and props exactly as they are. Remove all checkerboard pixels around the subject and through holes. No opaque background, no checkerboard illustration. Preserve exact original colors and all artwork.

Final Market white fallback prompt: Edit the original purple Nexa Market mascot artwork. Change ONLY the gray-and-white checkerboard background to completely flat pure white #FFFFFF. Keep the EXACT existing illustration, original purple colors, face, proportions, pose, all shopping bags, cart, products, logos, lettering and detached accents unchanged. Fill the backdrop through gaps between props and limbs with pure white too. No glow, no shadow, no checkerboard, no gradient, no reframing or restyling. Entire mascot and all props remain uncropped.

Alpha checked with macOS sips -g hasAlpha. Failures with opaque checkerboards or purple glow rejected.



## Website deliverables

The web-ready versions are in `public/mascots/`: parent.webp (original supplied alpha), stays.webp, go.webp, pay.webp, fresh.webp, jobs.webp (true alpha), and market.webp (white background). Original product PNG logos are retained in public/brand alongside optimized WebP files. No mascot was turned into 3D.
