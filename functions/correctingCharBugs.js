function correctingCharBugs(txt){
   txt = txt.replace("&gt;", ">");
   txt = txt.replace("&lt;", "<");
   txt = txt.replace("&amp;", "&");
   txt = txt.replace("&#8209;", "‑");
   txt = txt.replace("&#8210;", "‒");
   txt = txt.replace("&#8211;", "–");
   txt = txt.replace("&#8212;", "—");
   txt = txt.replace("&#8213;", "―");
   txt = txt.replace("&#8214;", "‖");
   txt = txt.replace("&#8215;", "‗");
   txt = txt.replace("&#8216;", "‘");
   txt = txt.replace("&#8217;", "’");
   txt = txt.replace("&#8218;", "‚");
   txt = txt.replace("&#8219;", "‛");
   txt = txt.replace("&#8220;", "“");
   txt = txt.replace("&#8221;", "”");
   txt = txt.replace("&#8222;", "„");
   txt = txt.replace("&#8223;", "‟");
   txt = txt.replace("&#8224;", "†");
   txt = txt.replace("&#8225;", "‡");
   txt = txt.replace("&#8226;", "•");
   txt = txt.replace("&#8227;", "‣");
   txt = txt.replace("&#8228;", "․");
   txt = txt.replace("&#8229;", "‥");
   txt = txt.replace("&#8230;", "…");
   txt = txt.replace("&#8231;", "‧");
   txt = txt.replace("&#8240;", "‰");
   txt = txt.replace("&#8241;", "‱");
   txt = txt.replace("&#8242;", "′");
   txt = txt.replace("&#8243;", "″");
   txt = txt.replace("&#8244;", "‴");
   txt = txt.replace("&#8245;", "‵");
   txt = txt.replace("&#8246;", "‶");
   txt = txt.replace("&#8247;", "‷");
   txt = txt.replace("&#8248;", "‸");
   txt = txt.replace("&#8249;", "‹");
   txt = txt.replace("&#8250;", "›");
   txt = txt.replace("&#8251;", "※");
   txt = txt.replace("&#8252;", "‼");
   txt = txt.replace("&#8253;", "‽");
   txt = txt.replace("&#8254;", "‾");
   txt = txt.replace("&#8255;", "‿");
   txt = txt.replace("&#8256;", "⁀");
   txt = txt.replace("&#8257;", "⁁");
   txt = txt.replace("&#8258;", "⁂");
   txt = txt.replace("&#8259;", "⁃");
   txt = txt.replace("&#8260;", "⁄");
   txt = txt.replace("&#8261;", "⁅");
   txt = txt.replace("&#8262;", "⁆");
   txt = txt.replace("&#8263;", "⁇");
   txt = txt.replace("&#8264;", "⁈");
   txt = txt.replace("&#8265;", "⁉");
   txt = txt.replace("&#8266;", "⁊");
   txt = txt.replace("&#8267;", "⁋");
   txt = txt.replace("&#8268;", "⁌");
   txt = txt.replace("&#8269;", "⁍");
   txt = txt.replace("&#8270;", "⁎");
   txt = txt.replace("&#8271;", "⁏");
   txt = txt.replace("&#8272;", "⁐");
   txt = txt.replace("&#8273;", "⁑");
   txt = txt.replace("&#8274;", "⁒");
   txt = txt.replace("&#8275;", "⁓");
   txt = txt.replace("&#8276;", "⁔");
   txt = txt.replace("&#8277;", "⁕");
   txt = txt.replace("&#8278;", "⁖");
   txt = txt.replace("&#8279;", "⁗");
   txt = txt.replace("&#8280;", "⁘");
   txt = txt.replace("&#8281;", "⁙");
   txt = txt.replace("&#8282;", "⁚");
   txt = txt.replace("&#8283;", "⁛");
   txt = txt.replace("&#8284;", "⁜");
   txt = txt.replace("&#8285;", "⁝");
   txt = txt.replace("&#8286;", "⁞");
   return txt;
}
