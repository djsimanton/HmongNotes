const CACHE_NAME = 'hmongnotes-cache-v13';

const urlsToCache = [
  '/',    // Root
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  
  'index.html',
  'hmongnotes.html',
  '1.html',
  '10.html',
  '100.html',
  '102.html',
  '103.html',
  '104.html',
  '105.html',
  '106.html',
  '107.html',
  '108.html',
  '109.html',
  '11.html',
  '111.html',
  '112.html',
  '113.html',
  '115.html',
  '116.html',
  '117.html',
  '118.html',
  '119.html',
  '12.html',
  '120.html',
  '121.html',
  '123.html',
  '124.html',
  '125.html',
  '126.html',
  '127.html',
  '129.html',
  '13.html',
  '131.html',
  '132.html',
  '133.html',
  '134.html',
  '136.html',
  '137.html',
  '138.html',
  '14.html',
  '140.html',
  '141.html',
  '142.html',
  '143.html',
  '144.html',
  '145.html',
  '146.html',
  '148.html',
  '150.html',
  '151.html',
  '152.html',
  '154.html',
  '155.html',
  '156.html',
  '158.html',
  '16.html',
  '160.html',
  '161.html',
  '162.html',
  '163.html',
  '165.html',
  '167.html',
  '169.html',
  '17.html',
  '171.html',
  '173.html',
  '175.html',
  '177.html',
  '179.html',
  '18.html',
  '181.html',
  '182.html',
  '183.html',
  '185.html',
  '186.html',
  '188.html',
  '189.html',
  '19.html',
  '190.html',
  '191.html',
  '192.html',
  '193.html',
  '194.html',
  '195.html',
  '196.html',
  '197.html',
  '198.html',
  '199.html',
  '2.html',
  '20.html',
  '200.html',
  '201.html',
  '202.html',
  '203.html',
  '205.html',
  '206.html',
  '207.html',
  '208.html',
  '209.html',
  '21.html',
  '210.html',
  '211.html',
  '212.html',
  '213.html',
  '214.html',
  '215.html',
  '216.html',
  '217.html',
  '218.html',
  '219.html',
  '22.html',
  '220.html',
  '221.html',
  '222.html',
  '223.html',
  '224.html',
  '226.html',
  '227.html',
  '228.html',
  '23.html',
  '230.html',
  '232.html',
  '233.html',
  '234.html',
  '235.html',
  '236.html',
  '237.html',
  '238.html',
  '239.html',
  '24.html',
  '240.html',
  '241.html',
  '242.html',
  '244.html',
  '245.html',
  '246.html',
  '248.html',
  '249.html',
  '25.html',
  '250.html',
  '251.html',
  '252.html',
  '254.html',
  '255.html',
  '257.html',
  '258.html',
  '26.html',
  '260.html',
  '261.html',
  '262.html',
  '263.html',
  '264.html',
  '265.html',
  '266.html',
  '267.html',
  '268.html',
  '269.html',
  '27.html',
  '271.html',
  '273.html',
  '274.html',
  '276.html',
  '277.html',
  '278.html',
  '28.html',
  '280.html',
  '281.html',
  '282.html',
  '284.html',
  '286.html',
  '287.html',
  '288.html',
  '289.html',
  '29.html',
  '291.html',
  '292.html',
  '293.html',
  '295.html',
  '297.html',
  '298.html',
  '299.html',
  '3.html',
  '30.html',
  '300.html',
  '301.html',
  '303.html',
  '304.html',
  '305.html',
  '306.html',
  '307.html',
  '309.html',
  '310.html',
  '311.html',
  '312.html',
  '313.html',
  '314.html',
  '315.html',
  '316.html',
  '318.html',
  '32.html',
  '320.html',
  '321.html',
  '322.html',
  '33.html',
  '34.html',
  '35.html',
  '36.html',
  '37.html',
  '39.html',
  '4.html',
  '41.html',
  '42.html',
  '44.html',
  '45.html',
  '46.html',
  '48.html',
  '49.html',
  '5.html',
  '50.html',
  '52.html',
  '53.html',
  '54.html',
  '56.html',
  '57.html',
  '58.html',
  '59.html',
  '6.html',
  '60.html',
  '62.html',
  '63.html',
  '64.html',
  '65.html',
  '66.html',
  '67.html',
  '68.html',
  '69.html',
  '7.html',
  '70.html',
  '72.html',
  '73.html',
  '74.html',
  '76.html',
  '77.html',
  '78.html',
  '79.html',
  '8.html',
  '80.html',
  '82.html',
  '83.html',
  '84.html',
  '85.html',
  '86.html',
  '87.html',
  '88.html',
  '9.html',
  '90.html',
  '91.html',
  '92.html',
  '94.html',
  '95.html',
  '96.html',
  '98.html',
  '99.html',
  'png_files/1._Kuv_nyiam_hu_nkauj_4_page000.png',
  'png_files/10._Thaum_lub_ntuj_kawg_4_page000.png',
  'png_files/100._Take_the_name_of_Jesus_with_You,___101.__Love_one_anothers_page000.png',
  'png_files/100._Take_the_name_of_Jesus_with_You,___101.__Love_one_anothers_page001.png',
  'png_files/102._He_lives_page000.png',
  'png_files/102._He_lives_page001.png',
  'png_files/103._I_m_but_a_stranger_here_page000.png',
  'png_files/104._Blessed_be_the_name_page000.png',
  'png_files/105._He_leadeth_me_page000.png',
  'png_files/106._I_am_so_glad_that_our_Father_page000.png',
  'png_files/107._Jesus_saviour,_pilot_me_page000.png',
  'png_files/108._The_gladness_day_page000.png',
  'png_files/109._Whosoever_heareth,__110._My_life_s_fading_away_page000.png',
  'png_files/109._Whosoever_heareth,__110._My_life_s_fading_away_page001.png',
  'png_files/11._Lord_in_the_morning_page000.png',
  'png_files/111._I_will_sing_of_Jesus__love_page000.png',
  'png_files/112._Thank_you_o_Father_page000.png',
  'png_files/113._To_the_work,__114._Litle_birds_page000.png',
  'png_files/113._To_the_work,__114._Litle_birds_page001.png',
  'png_files/115._Rescue_the_perishing_page000.png',
  'png_files/116._No_not_one_page000.png',
  'png_files/117._Come,_thou_fount_of_every_blessing_page000.png',
  'png_files/118._Be_silent_be_silent_page000.png',
  'png_files/119._There_shall_be_showers_of_blessing_page000.png',
  'png_files/12._Nearer,_my_God,_to_thee_page000.png',
  'png_files/120._Missionary_volunteer_page000.png',
  'png_files/121._There_s_a_stranger_at_the_door,___122._Heavenly_sunshine_page000.png',
  'png_files/121._There_s_a_stranger_at_the_door,___122._Heavenly_sunshine_page001.png',
  'png_files/123._All_to_Jesus_I_surrender_page000.png',
  'png_files/124._Praise_to_the_Lord_page000.png',
  'png_files/125._Rock_of_ages_page000.png',
  'png_files/126._Down_at_the_Cross_page000.png',
  'png_files/127._The_comforter_has_come,__128._Jesus_loves_His_children_page000.png',
  'png_files/127._The_comforter_has_come,__128._Jesus_loves_His_children_page001.png',
  'png_files/129._In_a_little_while_we_re_going_home,__130._Walking__with_Jesus_page000.png',
  'png_files/129._In_a_little_while_we_re_going_home,__130._Walking__with_Jesus_page001.png',
  'png_files/13._The_First_Song_I_sing_1_page000.png',
  'png_files/131._The_one_who_loves_page000.png',
  'png_files/131._The_one_who_loves_page001.png',
  'png_files/132._In_the_land_of_Fadeless_day_page000.png',
  'png_files/133._Entire_consecretion_page000.png',
  'png_files/134._In_this_world,_I_am_a_sinner.__135._God_loves_the_World_page000.png',
  'png_files/134._In_this_world,_I_am_a_sinner.__135._God_loves_the_World_page001.png',
  'png_files/136._Hill,_Golgotha_page000.png',
  'png_files/137._Orphan_page000.png',
  'png_files/138._Because,_God_is_the_way_of_love,__139._Hear_our_prayer_o_Lord_page000.png',
  'png_files/138._Because,_God_is_the_way_of_love,__139._Hear_our_prayer_o_Lord_page001.png',
  'png_files/14._Sweet_Hour_of_prayer,_15._Fisher_of_man__1_page000.png',
  'png_files/14._Sweet_Hour_of_prayer,_15._Fisher_of_man__1_page001.png',
  'png_files/140._There_is_a_place_page000.png',
  'png_files/141._In_Jesus_Christ,_we_are_not_parting_page000.png',
  'png_files/142._The_saviour_suffered_on_the_Cross_page000.png',
  'png_files/142._The_saviour_suffered_on_the_Cross_page001.png',
  'png_files/143._Meet_me_there_page000.png',
  'png_files/143._Meet_me_there_page001.png',
  'png_files/144.__Tis_so_sweet_to_trust_in_Jesus_page000.png',
  'png_files/145._Holy,_Holy,_Holy_page000.png',
  'png_files/146._Do_not_Worship_Devil_,__147._Christ_Above_All_page000.png',
  'png_files/146._Do_not_Worship_Devil_,__147._Christ_Above_All_page001.png',
  'png_files/148._Seeking_for_me,__149.__Amen_page000.png',
  'png_files/148._Seeking_for_me,__149.__Amen_page001.png',
  'png_files/150._Trust_and_obey_page000.png',
  'png_files/151._Joy_to_the_World_page000.png',
  'png_files/152._There_s_a_land_that_is_fairer_than_day,__153._How_fo_you_do_page000.png',
  'png_files/152._There_s_a_land_that_is_fairer_than_day,__153._How_fo_you_do_page001.png',
  'png_files/154._Silent_night_holy_night_page000.png',
  'png_files/155._We_three_Kings_of_Orient_page000.png',
  'png_files/156._Safe_in_the_arms_of_jesus,__157._Are_you_page000.png',
  'png_files/156._Safe_in_the_arms_of_jesus,__157._Are_you_page001.png',
  'png_files/158._Hark_the_herald_angels_sing,___159._This_little_light_of_mine_page000.png',
  'png_files/158._Hark_the_herald_angels_sing,___159._This_little_light_of_mine_page001.png',
  'png_files/16._Jesus,_the_very_thought_of_thee_page000.png',
  'png_files/160._O_holy_night_page000.png',
  'png_files/160._O_holy_night_page001.png',
  'png_files/161._O_come_all_ye_faithful_page000.png',
  'png_files/162._There_is_a_happy_land_page000.png',
  'png_files/163._There_ll_be_no_dark_valley,__164.__Jesus_page000.png',
  'png_files/163._There_ll_be_no_dark_valley,__164.__Jesus_page001.png',
  'png_files/165._Come_to_the_Saviour,___166._Jesus_holds_my_hand_page000.png',
  'png_files/165._Come_to_the_Saviour,___166._Jesus_holds_my_hand_page001.png',
  'png_files/167._Shall_we_gather_at_the_river,__168._HaleluJah_page000.png',
  'png_files/167._Shall_we_gather_at_the_river,__168._HaleluJah_page001.png',
  'png_files/169._The_King_of_Kings,__170._Follow_on_page000.png',
  'png_files/169._The_King_of_Kings,__170._Follow_on_page001.png',
  'png_files/17._Jehovah_God_cares_for_me_page000.png',
  'png_files/171._Oh_happy_day_that_fixed_my_choice,__172._Oh_brothers_page000.png',
  'png_files/171._Oh_happy_day_that_fixed_my_choice,__172._Oh_brothers_page001.png',
  'png_files/173._Where_we_ll_never_grow_old,_174_Happh_day_page000.png',
  'png_files/173._Where_we_ll_never_grow_old,_174_Happh_day_page001.png',
  'png_files/175._On_a_hill_far_away,__176._Amen_page000.png',
  'png_files/175._On_a_hill_far_away,__176._Amen_page001.png',
  'png_files/177._Christ_Arose,__178._God_is_love_page000.png',
  'png_files/177._Christ_Arose,__178._God_is_love_page001.png',
  'png_files/179._In_Heaven,_I_will_be_there,___180.__Be_on_time_page000.png',
  'png_files/179._In_Heaven,_I_will_be_there,___180.__Be_on_time_page001.png',
  'png_files/18._Face_to_face_with_Christ_my_Saviour_page000.png',
  'png_files/181._Blessed_Assurance,_Jesus_is_mine,__182._The_beautiful_city_page000.png',
  'png_files/181._Blessed_Assurance,_Jesus_is_mine,__182._The_beautiful_city_page001.png',
  'png_files/182._Must_Jesus_bear_the_cross_alone,__183._Throw_out_the_lifeline_page000.png',
  'png_files/183._Must_Jesus_bear_the_Cross_alone__184._Throw_out_the_lifeline_page000.png',
  'png_files/185._Come_we_that_love_the_Lord_page000.png',
  'png_files/186._Brother_be_faithful,_187._Open_your_heart_to_Christ_page000.png',
  'png_files/186._Brother_be_faithful,_187._Open_your_heart_to_Christ_page001.png',
  'png_files/188._Christian_are_one_in_Christ_page000.png',
  'png_files/189._Amid_the_trials_page000.png',
  'png_files/19._The_great_physician_now_is_near_page000.png',
  'png_files/190._Lord_I_care_not_for_riches_page000.png',
  'png_files/190._Lord_I_care_not_for_riches_page001.png',
  'png_files/191._Seek_ye_first_page000.png',
  'png_files/192._Feed_my_lambs_page000.png',
  'png_files/193._I_am_thinking_today_of_that_beautiful_land_page000.png',
  'png_files/193._I_am_thinking_today_of_that_beautiful_land_page001.png',
  'png_files/194._On_ward_Christian_Soldiers_page000.png',
  'png_files/194._On_ward_Christian_Soldiers_page001.png',
  'png_files/195._When_we_all_get_to_Heaven_page000.png',
  'png_files/196._Jesus_is_the_mighty_God_page000.png',
  'png_files/197._Seeking_the_lost_page000.png',
  'png_files/197._Seeking_the_lost_page001.png',
  'png_files/198._The_Angels_are_singing_page000.png',
  'png_files/198._The_Angels_are_singing_page001.png',
  'png_files/199._As_we_come_to_you_in_prayer_page000.png',
  'png_files/2.Angels_From_the_Realms_of_Glory_page000.png',
  'png_files/20._Christ_the_Lord_is_risen_to_day_page000.png',
  'png_files/200._Toiling_for_Jesus_page000.png',
  'png_files/201._All_the_way_page000.png',
  'png_files/202._Wa_are_one_in_the_Spirit_page000.png',
  'png_files/203._Jesus_is_the_Nurturer.__204._When_we_be_parted_pdf_page000.png',
  'png_files/203._Jesus_is_the_Nurturer.__204._When_we_be_parted_pdf_page001.png',
  'png_files/205._The_dark_World_page000.png',
  'png_files/206._Sinner_s_life_s_stile_page000.png',
  'png_files/207._I_ve_died_for_thee_page000.png',
  'png_files/207._I_ve_died_for_thee_page001.png',
  'png_files/208._Then_Jesus_came_page000.png',
  'png_files/208._Then_Jesus_came_page001.png',
  'png_files/209._The_Captain_calls_for_you_page000.png',
  'png_files/209._The_Captain_calls_for_you_page001.png',
  'png_files/21._O_let_me_walk_with_thee_page000.png',
  'png_files/210._Where_you_there_page000.png',
  'png_files/211._Christ_has_for_sin_atonement_made_page000.png',
  'png_files/212._I_need_the_prayers_page000.png',
  'png_files/213._Lead_me_to_Valvary_page000.png',
  'png_files/213_page000.png',
  'png_files/214._Love_s_rainbow_page000.png',
  'png_files/214._Love_s_rainbow_page001.png',
  'png_files/215._Beautiful_Valley_of_Eden_page000.png',
  'png_files/216._Brightly_beams_our_Father_s_mercy_page000.png',
  'png_files/217._Some_bright_morning_page000.png',
  'png_files/218._Men_all_stand_before_the_Cross_page000.png',
  'png_files/219._Time_does_not_wait_for_you_page000.png',
  'png_files/22._It_is_well_with_my_soul_page000.png',
  'png_files/220._At_Calvary_page000.png',
  'png_files/221._Step_by_step_page000.png',
  'png_files/222._Look_back_to_the_past_page000.png',
  'png_files/223._Standing_on_the_promises_page000.png',
  'png_files/223._Standing_on_the_promises_page001.png',
  'png_files/224._Sin_them_over_again_to_me,__225._Be_careful_your_eyes_page000.png',
  'png_files/224._Sin_them_over_again_to_me,__225._Be_careful_your_eyes_page001.png',
  'png_files/226._Break_thou_the_Bread_of_life_page000.png',
  'png_files/227._Stand_up_stand_up_for_Jesus_page000.png',
  'png_files/228._Life_in_A_look,__229._God_s_love_revealed_in_the_Lord_jesus_page000.png',
  'png_files/228._Life_in_A_look,__229._God_s_love_revealed_in_the_Lord_jesus_page001.png',
  'png_files/23._I_gave_my_life_for_thee_page000.png',
  'png_files/230._Brighten_the_Comer_where_you_are,__231,__Good_bye_my_friends_page000.png',
  'png_files/230._Brighten_the_Comer_where_you_are,__231,__Good_bye_my_friends_page001.png',
  'png_files/232._Sitting_at_the_Feet_of_Jesus_page000.png',
  'png_files/233._Any_wher_with_Jesus_page000.png',
  'png_files/234._Redeemed_how_l_Love_to_proclaim_it_page000.png',
  'png_files/235._Work_for_the_night_is_coming_page000.png',
  'png_files/236._Lord_I_want_to_be_a_Christian_page000.png',
  'png_files/237._Jesus_loves_sinners_page000.png',
  'png_files/238._We_are_nearing_home_page000.png',
  'png_files/238._We_are_nearing_home_page001.png',
  'png_files/239._He_s_eveything_to_me_page000.png',
  'png_files/239._He_s_eveything_to_me_page001.png',
  'png_files/24._O_where_are_the_reapers_page000.png',
  'png_files/240._Trust_in_God_page000.png',
  'png_files/241._Pass_it_on_page000.png',
  'png_files/242._Pawg_ntseeg_so_hnub_xya___243._Let_s_go_to_the_Holy_land_page000.png',
  'png_files/242._Pawg_ntseeg_so_hnub_xya___243._Let_s_go_to_the_Holy_land_page001.png',
  'png_files/244._Follow_me_page000.png',
  'png_files/245._I_have_decided_to_Follow_Jesus_page000.png',
  'png_files/246._Every_ought_to_know,___247._He_is_risen_page000.png',
  'png_files/246._Every_ought_to_know,___247._He_is_risen_page001.png',
  'png_files/248._God_is_the_way_of_love_page000.png',
  'png_files/249._In_the_manger_page000.png',
  'png_files/25._God_be_with_you_page000.png',
  'png_files/250._Ten_Virgins_page000.png',
  'png_files/250._Ten_Virgins_page001.png',
  'png_files/251._There__s_a_last_hope_in_God_page000.png',
  'png_files/251._There__s_a_last_hope_in_God_page001.png',
  'png_files/252._The_coming_King_is_at_the_door,__253.__God_is_so_good_page000.png',
  'png_files/252._The_coming_King_is_at_the_door,__253.__God_is_so_good_page001.png',
  'png_files/254._When_Jesus_shall_gather_the_nations_page000.png',
  'png_files/254._When_Jesus_shall_gather_the_nations_page001.png',
  'png_files/255._All_the_way,____256._I_m_on_my_way_home_page000.png',
  'png_files/255._All_the_way,____256._I_m_on_my_way_home_page001.png',
  'png_files/257._Sing_ha_le_lu_jah_to_the_Lord_page000.png',
  'png_files/257._Sing_ha_le_lu_jah_to_the_Lord_page001.png',
  'png_files/258._Do_lord.__259._Father_we_thank_thee_for_the_night_page000.png',
  'png_files/258._Do_lord.__259._Father_we_thank_thee_for_the_night_page001.png',
  'png_files/26._Safely_though_another_week_page000.png',
  'png_files/260._All_hail_the_power_of_Jesus__name_page000.png',
  'png_files/261._Come_to_Jesus_page000.png',
  'png_files/262._O_come_O_come__Emmanuel_R_page000.png',
  'png_files/263._He_banner_over_me__L_page000.png',
  'png_files/264._Happiness_is_in_the_Lord__R_page000.png',
  'png_files/265._God_created_man_L_page000.png',
  'png_files/266._There_were_ninety_and_nine__R-L_page000.png',
  'png_files/266._There_were_ninety_and_nine__R-L_page001.png',
  'png_files/267._I_shall_see_the_King_page000.png',
  'png_files/268._Come_take_the_water_of_life_page000.png',
  'png_files/269._I__d_rather_have_Jesus___270.__Only_believe_page000.png',
  'png_files/269._I__d_rather_have_Jesus___270.__Only_believe_page001.png',
  'png_files/27._Jonah_page000.png',
  'png_files/271._Can_the_world_see_Jesus_in_you,__272._Ask_the_Saviour_page000.png',
  'png_files/271._Can_the_world_see_Jesus_in_you,__272._Ask_the_Saviour_page001.png',
  'png_files/273._His_eye_is_on_the_Sparrow_page000.png',
  'png_files/273._His_eye_is_on_the_Sparrow_page001.png',
  'png_files/274._Count_your_many_blessings___275._Glory_to_be_the_Father_page000.png',
  'png_files/274._Count_your_many_blessings___275._Glory_to_be_the_Father_page001.png',
  'png_files/276._At_the_Cross_page000.png',
  'png_files/277._Little_towm_of_Bethlehem_page000.png',
  'png_files/278._Send_the_light____279._Bring_the_lost_to_home_page000.png',
  'png_files/278._Send_the_light____279._Bring_the_lost_to_home_page001.png',
  'png_files/28._Hover_O_er_me_Holy_Spirit_page000.png',
  'png_files/280._Jesus_bids_us_shine_page000.png',
  'png_files/281._As_we_come_to_you_in_prayer_page000.png',
  'png_files/282._We_know_no_the_hour,___283._Thank_you_now_page000.png',
  'png_files/282._We_know_no_the_hour,___283._Thank_you_now_page001.png',
  'png_files/284._We_have_this_hope,__285._Thank_you_Lord_page000.png',
  'png_files/284._We_have_this_hope,__285._Thank_you_Lord_page001.png',
  'png_files/286._I_love_to_sing_page000.png',
  'png_files/287._Hppy_the_home_page000.png',
  'png_files/288._The_regions_beyond_page000.png',
  'png_files/288._The_regions_beyond_page001.png',
  'png_files/289._A_wonderful_Saviour_is_Jesus_my_Lord,__290.__In_Christ_there_is_no_east_nor_west_page000.png',
  'png_files/289._A_wonderful_Saviour_is_Jesus_my_Lord,__290.__In_Christ_there_is_no_east_nor_west_page001.png',
  'png_files/29._Holy_Spirit,_Faithful_Guide_page000.png',
  'png_files/291._There_s_a_song_in_the_air_page000.png',
  'png_files/292._Jesus_lover_of_my_soul_page000.png',
  'png_files/293._Nothing_but,_the_blood,___294,___Roll_away_page000.png',
  'png_files/293._Nothing_but,_the_blood,___294,___Roll_away_page001.png',
  'png_files/295._Praise_him__praise_him_,__296._Meal__time_prayer_page000.png',
  'png_files/295._Praise_him__praise_him_,__296._Meal__time_prayer_page001.png',
  'png_files/297._Lord_we_come_before_you_now_page000.png',
  'png_files/298._We_gather_together_page000.png',
  'png_files/299._Sun_of_my_soul_page000.png',
  'png_files/3._Thaum_hnub_yuav_poob_4_page000.png',
  'png_files/30._The_Love_of_God,_31._Roll_Roll_Your_Burdens_Away_page000.png',
  'png_files/30._The_Love_of_God,_31._Roll_Roll_Your_Burdens_Away_page001.png',
  'png_files/300._A_new_year_s_blessing_page000.png',
  'png_files/301._We_would_see_jesus_page000.png',
  'png_files/302__Saviour_like_a_Shepherd_page000.png',
  'png_files/303._There_is_a_place_of_quiet_rest_page000.png',
  'png_files/304._I_heard_the_voice_of_Jesus_say_page000.png',
  'png_files/305._Have_thy_own_way_Lord__R_page000.png',
  'png_files/306._I_would_be_Dear_Savior,_wholl_thine__R_page000.png',
  'png_files/307._Nothing_betwe308._the_world_of_sin_page000.png',
  'png_files/307._Nothing_betwe308._the_world_of_sin_page001.png',
  'png_files/309.__Ask_and_shall_be_given_to_you_page000.png',
  'png_files/310._Be_yond_the_Sun_set__L_page000.png',
  'png_files/311._The__creator_is_God_page000.png',
  'png_files/311._The__creator_is_God_page001.png',
  'png_files/312._Let_s_trust_in_God_page000.png',
  'png_files/312._Let_s_trust_in_God_page001.png',
  'png_files/313._Jesus_the_loving_shepherd_page000.png',
  'png_files/313._Jesus_the_loving_shepherd_page001.png',
  'png_files/314._I_know_that_my_redeemer_liveth_page000.png',
  'png_files/314._I_know_that_my_redeemer_liveth_page001.png',
  'png_files/315._The_dreaming_world_page000.png',
  'png_files/315._The_dreaming_world_page001.png',
  'png_files/316._Away_cgeerful.___317,__Praise_the_Lord_page000.png',
  'png_files/316._Away_cgeerful.___317,__Praise_the_Lord_page001.png',
  'png_files/318.__The_first_Noel,___319.__My_body_is_God_s_Temple_page000.png',
  'png_files/318.__The_first_Noel,___319.__My_body_is_God_s_Temple_page001.png',
  'png_files/32._The_Lord_in_Zion_reigneth_page000.png',
  'png_files/320.__More_Love_to_thee_page000.png',
  'png_files/321._Christ_is_made_the_sure_foundation_page000.png',
  'png_files/322.If_I_ve_wings_like_a_bird___323.__John_3_vers16_page000.png',
  'png_files/322.If_I_ve_wings_like_a_bird___323.__John_3_vers16_page001.png',
  'png_files/33._Come,_thou_almighty_King_page000.png',
  'png_files/34._Jesus_love_me_this_I_know_page000.png',
  'png_files/35._Jesus_is_coming_again_page000.png',
  'png_files/36._When_the_roll_is_called_up_yonder_page000.png',
  'png_files/36._When_the_roll_is_called_up_yonder_page001.png',
  'png_files/37._Lift_Him_up,__38._My_Lord_knows_the_way_page000.png',
  'png_files/37._Lift_Him_up,__38._My_Lord_knows_the_way_page001.png',
  'png_files/39._Amazing_grace,__40.__Into_my_heart_page000.png',
  'png_files/4._hnub_no_kuv_rov_los_4_page000.png',
  'png_files/41._What_a_fellowship,_what_a_joy_Divine_page000.png',
  'png_files/42._How_great_thou_art,_43._The_Lord_is_in_His_holy_Temple_page000.png',
  'png_files/42._How_great_thou_art,_43._The_Lord_is_in_His_holy_Temple_page001.png',
  'png_files/44._Jesus_is_all_the_world_to_me_page000.png',
  'png_files/45._Jesus_keep_me_near_the_Cross_page000.png',
  'png_files/46._The_Lord_is_my_light,__47.__Whisper_a_prayer_page000.png',
  'png_files/46._The_Lord_is_my_light,__47.__Whisper_a_prayer_page001.png',
  'png_files/48._Rejoice,_Ye_pure_in_heart_page000.png',
  'png_files/49._This_is_my_Father_s_world_page000.png',
  'png_files/5._Hnub_no_yog_hnub_xyivfab_4_page000.png',
  'png_files/50._Give_me_the_Bible,__51._Two_eyes_read_the_Bible_page000.png',
  'png_files/50._Give_me_the_Bible,__51._Two_eyes_read_the_Bible_page001.png',
  'png_files/52._The_righteous_deed_is_righteousness_page000.png',
  'png_files/53._I_m_pressing_on_the_upward_way_page000.png',
  'png_files/54._This_world_is_not_my_home,_55._Thank_you_Jesus_page000.png',
  'png_files/54._This_world_is_not_my_home,_55._Thank_you_Jesus_page001.png',
  'png_files/56._The_way_of_the_Cross_leads_home_page000.png',
  'png_files/57._Love_Divine_page000.png',
  'png_files/58._My_hope_is_built_nothing_less_page000.png',
  'png_files/59._Watch_Ye_saints_page000.png',
  'png_files/6._Kuv_hnob_Vajtswv_hais_4_page000.png',
  'png_files/60._To_God_be_the_glory,_61._turn_your_eye_upon_Jesus_page000.png',
  'png_files/60._To_God_be_the_glory,_61._turn_your_eye_upon_Jesus_page001.png',
  'png_files/62._I_need_thee_Every_hour_page000.png',
  'png_files/63._I_hear_thy_welcome_voice_page000.png',
  'png_files/64._I_will_follow_thee_page000.png',
  'png_files/65._I_am_thine_o_Lord_page000.png',
  'png_files/66._My_faith_looks_up_to_thee_page000.png',
  'png_files/67._Where_He_leads_me_page000.png',
  'png_files/68._Sing_the_mighty_power_page000.png',
  'png_files/69._I_am_coming_to_the_Cross_page000.png',
  'png_files/7._Thaum_kuv_raug_kev_txom_nyem_4_page000.png',
  'png_files/70._I_love_to_tell_the_story,__71._Will_you_be_my_friend_page000.png',
  'png_files/70._I_love_to_tell_the_story,__71._Will_you_be_my_friend_page001.png',
  'png_files/72._There_is_a_fountain_page000.png',
  'png_files/73._I_love_thee_better_Lord_page000.png',
  'png_files/74._Are_you_washed_in_the_blood,__75._We_are_gethering_page000.png',
  'png_files/74._Are_you_washed_in_the_blood,__75._We_are_gethering_page001.png',
  'png_files/76._What_a_friend_we_have_in_jesus_page000.png',
  'png_files/77._Jointly_on_the_way_page000.png',
  'png_files/78._Bring_them_in_page000.png',
  'png_files/79._There_is_power_in_the_blood_page000.png',
  'png_files/8._Hnub_no_yog_hnub_chib_so_4_page000.png',
  'png_files/80._Some_day_the_silver_cord_will_break.__81._For_God_so_loved_the_world_page000.png',
  'png_files/80._Some_day_the_silver_cord_will_break.__81._For_God_so_loved_the_world_page001.png',
  'png_files/82._I_ve_Faund_a_friend_page000.png',
  'png_files/83._Awake,_my_soul_in_joyful_lays_page000.png',
  'png_files/84._Just_as_I_am_page000.png',
  'png_files/85._My_Jesus,_I_love_thee_page000.png',
  'png_files/86._Land_of_Thai_page000.png',
  'png_files/87._Take_the_world_but_give_me_Jesus_page000.png',
  'png_files/88._Don_t_forget_the_Sabbath,__89._Praise_God_from_whom_all_blessing_flow_page000.png',
  'png_files/88._Don_t_forget_the_Sabbath,__89._Praise_God_from_whom_all_blessing_flow_page001.png',
  'png_files/9._Thov_Vajtswv_khuv_leej_4_page000.png',
  'png_files/90._Crown_Him_with_many_crowns_page000.png',
  'png_files/91._Faith_of_our_Fathers_page000.png',
  'png_files/92._God_the_creator,__93._You_can_smile_page000.png',
  'png_files/92._God_the_creator,__93._You_can_smile_page001.png',
  'png_files/94._We_have_heard_a_joyful_sound_page000.png',
  'png_files/95._Pass_me_not,_o_gentle_Saviour_page000.png',
  'png_files/96._Sowing_in_the_morning,__97._Bless_be_the_tie_page000.png',
  'png_files/96._Sowing_in_the_morning,__97._Bless_be_the_tie_page001.png',
  'png_files/98._O_worship_the_King_page000.png',
  'png_files/99._How_firm_a_foundation_page000.png',
  'license.html',
  'favicon.ico',
  'service-worker.js',
  'css/index.css',
  'css/slider.css',
  'css/style.css',
  'images/appname.png',
  'images/arrow-l-black.png',
  'images/arrow-r-black.png',
  'images/booktitle.png',
  'images/booktitle_old1.png',
  'images/booktitle_old2.png',
  'images/call.png',
  'images/CC.png',
  'images/footer_bg.png',
  'images/footer_bg1.png',
  'images/logo.png',
  'images/logo.psd',
  'images/music-notes.jpg',
  'images/pin.png',
  'images/search.png',
  'images/search_h.png',
  'images/slide-pagenat.png',
  'images/slider-icons.png',
  'images/slider_bg.jpg',
  'images/slider_bg1.jpg',
  'images/top-move.jpg',
  'fonts/fonts.css',
  'fonts/Phetsarath-Bold.ttf',
  'fonts/Phetsarath-Regular.ttf',
  'js/easing.js',
  'js/font-buttons.js',
  'js/index.js',
  'js/jquery.cslider.js',
  'js/jquery.flexisel.js',
  'js/jquery.min.js',
  'js/modernizr.custom.28468.js',
  'js/move-top.js',
  'js/script.js'
];

let shouldCache = false; // default, wait for opt-in

self.addEventListener('message', event => {
  if (event.data === 'START_CACHING') {
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(urlsToCache).then(() => {
        event.source?.postMessage('CACHING_COMPLETE');
      });
    });
  } else if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  } else if (event.data === 'CLEAR_CACHE') {
    caches.keys().then(cacheNames => {
      Promise.all(cacheNames.map(cache => caches.delete(cache))).then(() => {
        event.source?.postMessage('CACHING_COMPLETE');
      });
    });
  }
});


// Precache only if allowed
self.addEventListener('install', event => {
  self.skipWaiting(); // always activate new SW
  event.waitUntil(Promise.resolve()); // Wait for postMessage to decide
});

// Cache after activation, if enabled
self.addEventListener('activate', event => {
  if (shouldCache) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(urlsToCache);
      }).then(() =>
        caches.keys().then(cacheNames =>
          Promise.all(
            cacheNames.map(cache => {
              if (cache !== CACHE_NAME) {
                return caches.delete(cache);
              }
            })
          )
        )
      )
    );
  } else {
    event.waitUntil(
      caches.keys().then(cacheNames =>
        Promise.all(
          cacheNames.map(cache => caches.delete(cache))
        )
      )
    );
  }

  self.clients.claim();
});


// Install: pre-cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Activate new SW immediately
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch: serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  // Handle HTML navigations
  if (
    request.mode === 'navigate' ||
    (request.headers.get('accept')?.includes('text/html') && !url.pathname.endsWith('.html'))
  ) {
    const fallbackUrl = url.pathname.endsWith('/')
      ? `${url.pathname}index.html`
      : `${url.pathname}.html`;

    event.respondWith(
      caches.match(fallbackUrl).then(response => {
        return response || fetch(request).catch(() => caches.match('/contents.html'));
      })
    );
    return;
  }

  // Handle other assets (added the missing part)
  event.respondWith(
    caches.match(request).then(response => {
      return (
        response ||
        fetch(request).catch(() => {
          if (request.destination === 'document') {
            return caches.match('/contents.html');
          }
        })
      );
    })
  );
});


// Handle other assets
event.respondWith(
  caches.match(request).then(response => {
    if (response) {
      return response;
    }

    return fetch(request).catch(() => {
      // Only return a fallback if the request is for a page/document
      if (request.destination === 'document') {
        return caches.match('/contents.html');
      }

      // For other types (images, scripts, etc), return nothing
      return new Response('', { status: 404, statusText: 'Not found' });
    });
  })
);

// Listen for messages from main thread
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  // Clear cache if offline mode is disabled
  if (event.data === 'CLEAR_CACHE') {
    caches.keys().then(cacheNames => {
      cacheNames.forEach(cache => {
        caches.delete(cache);
      });
    });
  }
});