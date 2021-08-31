local TrelloAPI = require(game.ServerScriptService:WaitForChild("TrelloAPI")) -- you need trello api: https://www.roblox.com/library/214265621/Trello-API-Original
local BoardID = TrelloAPI:GetBoardID("") -- board id
local vehicle1 = TrelloAPI:GetListID("",BoardID) 
local Players = game:GetService("Players")
local groupID = 00000
local SpawningMinimumRank = 000
game.Players.PlayerAdded:Connect(function(player)  -- player joins/connects to server 
	print("player joined")
-- VEHICLE 1= --
	local Vehicle1Cards = TrelloAPI:GetCardsInList(vehicle1) -- looking for cards in the specific list as stated in local ListID. 
	print("found cards")
	for v,i in pairs(Vehicle1Cards) do
		if i.UserId == player.UserId then -- so if the players id is on a card 
-- you can show a car spawning ui or whatever u want
        end
    end
end)


