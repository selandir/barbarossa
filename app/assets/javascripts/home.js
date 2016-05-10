// String.prototype.capitalizeFirstLetter = function() {
//   return this.charAt(0).toUpperCase() + this.slice(1);
// }
// $(document).ready(function() {
//   $('[data-toggle="tooltip"]').tooltip();
// });
// var data = null
// var data2 = null
// getData();
//
// function getData() {
//   $.ajax({
//     type: 'GET',
//     url: 'https://api.myjson.com/bins/16dgu',
//     dataType: "json",
//     success: function(data) {
//       data2 = data;
//       data = data2.data;
//       refresh_table();
//       $('#loading').hide();
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log('get err');
//       getData();
//     }
//   });
//   /*$.get("https://api.myjson.com/bins/16dgu", function(data, textStatus, jqXHR) {
//     data2=data;
//     data=data2.data;
//     refresh_table();
//   });*/
// };
//
// function refresh_table() {
//   while (data2 == null) {
//     setTimeout(getData, 2000);
//     console.log('while' + data2.data);
//   }
//   console.log('data' + data2.data);
//   $.each(data2.data, function(index, value) {
//
//     if (value.valid && !value.deleted) {
//       var fixed_id = value.class_.toLowerCase().replace(" ", "");
//       $('#' + fixed_id).append(
//         '<div class="character-info"><a href="#!" data-toggle="tooltip" data-placement="bottom" title="' +
//         value.tooltip.replace('<','').replace('>','') + '"><span class="name">' + value.name.replace('<','').replace('>','') +
//         '</span></a><img src="' + role_to_image(value.role) +
//         '" class="role"></div>');
//       $(role_to_id(value.role, value.class_)).append('<li class="' +
//         value.class_.replace(/\s+/g, '').toLowerCase() +
//         '-element" ><b>' + value.name.replace('<','').replace('>','') + '</b></li>');
//     } else if (!value.valid && !value.deleted) {
//       $('#pending').append(
//         '<div class="character-info"><a href="#!" data-toggle="tooltip" data-placement="bottom" title="' +
//         value.tooltip.replace('<','').replace('>','') + '"><span class="name">' + value.name.replace('<','').replace('>','') +
//         '</span></a><img src="' + role_to_image(value.role.replace('<','').replace('>','')) +
//         '" class="role">' + class_to_image(value.class_.replace('<','').replace('>','')) + '</div>');
//     }
//   });
//   countPeopleByRoles();
// };
//
// function role_to_id(arg, arg2) {
//   var rolename = arg.replace(/\s+/g, '').toLowerCase();
//   if (rolename == "tank") return '#tanks-wow'
//   if (rolename == "healer") return '#healers-wow'
//   if (rolename == "damage") {
//     var classname = arg2.replace(/\s+/g, '').toLowerCase();
//     if (classname == 'warlock' || classname == 'hunter' || classname ==
//       'mage' || classname == 'priest' || classname == 'druid' || classname ==
//       'shaman') return '#dd-wow'
//     return '#ddm-wow'
//   }
// };
//
// function countPeopleByRoles(){
//   $('#dd-wow-n').text($('#dd-wow li').length)
//   $('#ddm-wow-n').text($('#ddm-wow li').length)
//   $('#tanks-wow-n').text($('#tanks-wow li').length)
//   $('#healers-wow-n').text($('#healers-wow li').length)
// };
//
// function role_to_image(v) {
//   if (v == 'Damage') return 'http://cdn.fragmentedthought.com/sites/default/files/styles/large/public/Damage.png'
//   if (v == 'Tank') return 'http://eu.battle.net/wow/static/images/game/guide/getting-started/icon-class-role-tank.gif'
//   if (v == 'Healer') return 'http://www.randomlatinwords.dk/wp-content/uploads/2016/01/wow_role_icone_heal_soin.png'
//   return null
// };
//
// function class_to_image(v) {
//   if (v == "Death knight") return
//     '<img class="class-icon2" src="http://vignette2.wikia.nocookie.net/wowwiki/images/f/fa/IconSmall_Deathknight.gif/revision/latest?cb=20080717214217">'
//   if (v == 'Demon hunter') return
//     '<img class="class-icon2" src="http://vignette1.wikia.nocookie.net/wowwiki/images/3/39/IconSmall_Demonhunter.gif/revision/latest?cb=20151108175244">'
//   if (v == 'Druid') return
//     '<img class="class-icon2" src="http://vignette2.wikia.nocookie.net/wowwiki/images/3/37/IconSmall_Druid.gif/revision/latest?cb=20050912092444">'
//   if (v == 'Hunter') return
//     '<img class="class-icon2" src="http://vignette1.wikia.nocookie.net/wowwiki/images/f/fc/IconSmall_Hunter.gif/revision/latest?cb=20050912092456">'
//   if (v == 'Mage') return
//     '<img class="class-icon2" src="http://vignette1.wikia.nocookie.net/wowwiki/images/9/93/IconSmall_Mage.gif/revision/latest?cb=20050912092507">'
//   if (v == 'Monk') return
//     '<img class="class-icon2" src="http://vignette2.wikia.nocookie.net/wowwiki/images/c/c9/IconSmall_Monk.gif/revision/latest?cb=20120216070907">'
//   if (v == 'Paladin') return
//     '<img class="class-icon2" src="http://vignette3.wikia.nocookie.net/wowwiki/images/7/77/IconSmall_Paladin.gif/revision/latest?cb=20050912092527">'
//   if (v == 'Priest') return
//     '<img class="class-icon2" src="http://vignette1.wikia.nocookie.net/wowwiki/images/b/b5/IconSmall_Priest.gif/revision/latest?cb=20050912092540">'
//   if (v == 'Rogue') return
//     '<img class="class-icon2" src="http://vignette3.wikia.nocookie.net/wowwiki/images/8/80/IconSmall_Rogue.gif/revision/latest?cb=20050912092555">'
//   if (v == 'Shaman') return
//     '<img class="class-icon2" src="http://vignette2.wikia.nocookie.net/wowwiki/images/5/50/IconSmall_Shaman.gif/revision/latest?cb=20050912092607">'
//   if (v == 'Warlock') return
//     '<img class="class-icon2" src="http://vignette4.wikia.nocookie.net/wowwiki/images/7/7d/IconSmall_Warlock.gif/revision/latest?cb=20050912092619">'
//   if (v == 'Warrior') return
//     '<img class="class-icon2" src="http://vignette1.wikia.nocookie.net/wowwiki/images/4/4a/IconSmall_Warrior.gif/revision/latest?cb=20050912092648">'
//   return null
// }
//
// function submitForm() {
//   $('#form_loading').show();
//   var nick = $('#nick').val();
//   var tooltip = $('#tooltip').val();
//   var btag = $('#btag').val();
//   var wow_class = $('#wow-class').val();
//   var wow_role = $('#wow-role').val();
//   var new_member = {
//     name: nick,
//     role: wow_role,
//     class_: wow_class,
//     tooltip: tooltip,
//     battletag: btag,
//     valid: false,
//     deleted: false
//   };
//   //slack-hook:
//   var slack_notification = "New application to Barbarossa.\nNick: " + nick +
//     "\nClass: " + wow_class + "\nRole: " + wow_role + "\nBattletag: " + btag +
//     "\ntooltip:" + tooltip + "\n"
//   slack_data =
//     'payload={"channel": "#test-prosa", "username": "Barbarossa-BOT", "text": "' +
//     slack_notification + '", "icon_emoji": ":boat:"}'
//   $.ajax({
//     url: "https://hooks.slack.com/services/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",
//     type: "POST",
//     data: encodeURI(slack_data),
//     dataType: "json",
//     success: function(data, textStatus, jqXHR) {
//       console.log('pushed to slack.')
//     }
//   });
//   data2.data[data2.data.length] = new_member
//   var updated_data = JSON.stringify(data2)
//   $.ajax({
//     url: "https://api.myjson.com/bins/16dgu",
//     type: "PUT",
//     data: updated_data,
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     tryCount: 0,
//     retryLimit: 50,
//     success: function(data, textStatus, jqXHR) {
//       $('#form_loading').hide();
//       $('#form_success').show();
//       alert('Dziękujemy ' + nick +
//         ' za aplikację. W celu weryfikacji skontaktujemy się z Tobą przez battlenet.'
//       );
//     },
//     error: function(xhr, textStatus, errorThrown) {
//       this.tryCount++;
//       if (this.tryCount <= this.retryLimit) {
//         //try again
//         console.log('trying again...');
//         $.ajax(this);
//         return;
//       }
//       return;
//     }
//   });
//   return false;
// };
//
// function up(data) {
//   var updated_data = JSON.stringify(data)
//   $.ajax({
//     url: "https://api.myjson.com/bins/16dgu",
//     type: "PUT",
//     data: updated_data,
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     success: function(data, textStatus, jqXHR) {
//       console.log(data);
//     }
//   });
// };
