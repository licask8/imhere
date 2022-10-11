import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#1f1e25",
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    name: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
        marginLeft: 16
    },
    buttonText: {
        color: "#fff",
        
      },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#e23c44",
        justifyContent: 'center',
        alignItems: 'center',
      },
});