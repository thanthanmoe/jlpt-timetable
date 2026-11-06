import zlib
import struct
import math

def create_png(width, height, filename):
    # RGBA image buffer
    raw_data = bytearray()
    
    center_x = width / 2
    center_y = height / 2
    radius = width * 0.42
    
    # Background color: Indigo gradient / circle: #4f46e5 (79, 70, 229)
    # Icon inside: Alarm bell / clock in white
    
    for y in range(height):
        raw_data.append(0)  # Filter type 0 (None)
        for x in range(width):
            dx = x - center_x
            dy = y - center_y
            dist = math.sqrt(dx * dx + dy * dy)
            
            # Rounded squircle background
            # corner radius approx 22%
            corner_r = width * 0.22
            box_w = width * 0.44
            box_h = height * 0.44
            
            qx = max(0, abs(dx) - (box_w - corner_r))
            qy = max(0, abs(dy) - (box_h - corner_r))
            q_dist = math.sqrt(qx * qx + qy * qy)
            
            in_squircle = (abs(dx) <= box_w and abs(dy) <= box_h and (qx == 0 or qy == 0 or q_dist <= corner_r))
            
            if in_squircle:
                # Base indigo color: #4338ca (67, 56, 202)
                r, g, b, a = 67, 56, 202, 255
                
                # Draw clock circle inside: radius width * 0.28, thickness width * 0.035
                clock_r = width * 0.28
                clock_thick = width * 0.035
                
                # Outer ring
                if abs(dist - clock_r) <= clock_thick / 2:
                    r, g, b = 255, 255, 255
                
                # Clock center dot
                if dist <= width * 0.045:
                    r, g, b = 255, 255, 255
                    
                # Clock hands: Hour hand pointing at ~10 o'clock (-60 deg), Minute hand at ~2 o'clock (60 deg)
                # Angle from center
                angle = math.atan2(dy, dx) # -pi to pi
                # Hour hand: length width*0.16, angle -2.0 rad (~10:00)
                # Hand line segment distance check
                def dist_to_segment(px, py, x1, y1, x2, y2):
                    l2 = (x2-x1)**2 + (y2-y1)**2
                    if l2 == 0: return math.sqrt((px-x1)**2 + (py-y1)**2)
                    t = max(0, min(1, ((px-x1)*(x2-x1) + (py-y1)*(y2-y1)) / l2))
                    proj_x = x1 + t * (x2-x1)
                    proj_y = y1 + t * (y2-y1)
                    return math.sqrt((px-proj_x)**2 + (py-proj_y)**2)
                
                # Minute hand: to top-right (x = center_x + width*0.19, y = center_y - height*0.12)
                m_x = center_x + width * 0.16
                m_y = center_y - height * 0.16
                if dist_to_segment(x, y, center_x, center_y, m_x, m_y) <= width * 0.025 and dist <= width * 0.24:
                    r, g, b = 255, 255, 255
                    
                # Hour hand: to top-left
                h_x = center_x - width * 0.13
                h_y = center_y - height * 0.08
                if dist_to_segment(x, y, center_x, center_y, h_x, h_y) <= width * 0.03 and dist <= width * 0.17:
                    r, g, b = 255, 255, 255
                    
                # Alarm bells on top (two little ears on top left and top right)
                ear1_dx = dx - (-width * 0.22)
                ear1_dy = dy - (-height * 0.26)
                if math.sqrt(ear1_dx**2 + ear1_dy**2) <= width * 0.07:
                    r, g, b = 255, 220, 100
                    
                ear2_dx = dx - (width * 0.22)
                ear2_dy = dy - (-height * 0.26)
                if math.sqrt(ear2_dx**2 + ear2_dy**2) <= width * 0.07:
                    r, g, b = 255, 220, 100

                raw_data.extend([r, g, b, a])
            else:
                raw_data.extend([0, 0, 0, 0])
                
    # Compress raw data
    compressed = zlib.compress(bytes(raw_data), 9)
    
    # PNG signature
    png = b'\x89PNG\r\n\x1a\n'
    
    # IHDR chunk
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
    png += struct.pack('>I', len(ihdr_data)) + b'IHDR' + ihdr_data + struct.pack('>I', ihdr_crc)
    
    # IDAT chunk
    idat_crc = zlib.crc32(b'IDAT' + compressed)
    png += struct.pack('>I', len(compressed)) + b'IDAT' + compressed + struct.pack('>I', idat_crc)
    
    # IEND chunk
    iend_crc = zlib.crc32(b'IEND')
    png += struct.pack('>I', 0) + b'IEND' + struct.pack('>I', iend_crc)
    
    with open(filename, 'wb') as f:
        f.write(png)
    print(f"Generated {filename}")

create_png(192, 192, "d:/Timetable app/icon-192.png")
create_png(512, 512, "d:/Timetable app/icon-512.png")

